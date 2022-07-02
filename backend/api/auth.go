package api

import (
	"auth/repo"
	"encoding/json"

	"net/http"
	"time"

	"golang.org/x/crypto/bcrypt"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
)

func (api *API) login(c *gin.Context) {
	var request reqLogin
	err := json.NewDecoder(c.Request.Body).Decode(&request)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"code":    http.StatusBadRequest,
			"message": "Invalid request body",
		})
		return
	}

	if request.Email == "" || request.Password == "" {
		c.JSON(http.StatusUnauthorized, gin.H{
			"code":    http.StatusUnauthorized,
			"message": "username dan password tidak boleh kosong",
		})
		return
	}

	resp, err := api.userRepo.CheckUser(request.Email)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":    http.StatusInternalServerError,
			"message": err.Error(),
		})
		return
	}
	data := *resp

	if data.Email != request.Email {
		c.JSON(http.StatusUnauthorized, gin.H{
			"code":    http.StatusUnauthorized,
			"message": "user credential invalid",
		})
		return
	}

	if bcrypt.CompareHashAndPassword([]byte(data.Password), []byte(request.Password)) != nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"code":    http.StatusUnauthorized,
			"message": "password invalid",
		})
		return
	}

	expirationTime := time.Now().Add(24 * time.Hour)

	claims := &Claims{
		Id:       data.Id,
		Email:    data.Email,
		Username: data.Username,
		Jenjang:  data.Jenjang,
		Kota:     data.Kota,
		Image:    data.Image,
		Role:     data.Role,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
	}
	// Buat token menggunakan encoded claim dengan salah satu algoritma yang dipakai
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// Buat jwt string dari token yang sudah dibuat menggunakan JWT key yang telah dideklarasikan
	tokenString, err := token.SignedString(jwtKey)

	http.SetCookie(c.Writer, &http.Cookie{
		Name:    "token",
		Value:   tokenString,
		Expires: expirationTime,
	})

	c.JSON(http.StatusOK, gin.H{
		"code":    http.StatusOK,
		"message": "login success",
		"data":    data,
	})

}

func (api *API) Register(c *gin.Context) {
	var request repo.User

	err := json.NewDecoder(c.Request.Body).Decode(&request)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"code":    http.StatusBadRequest,
			"message": "Invalid request body",
		})
		return
	}

	if request.Username == "" || request.Password == "" || request.Email == "" || request.Jenjang == "" || request.Kota == "" {
		c.JSON(http.StatusUnauthorized, gin.H{
			"code":    http.StatusUnauthorized,
			"message": "data tidak boleh kosong",
		})
		return
	}

	cek, _ := api.userRepo.CheckUserRegis(request.Email)
	if cek.Id != 0 {
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":    http.StatusInternalServerError,
			"message": "Email sudah terdaftar",
		})
		return
	}

	_, err = api.userRepo.Register(request)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":    http.StatusInternalServerError,
			"message": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"code":    http.StatusOK,
		"message": "Register Success",
	})

}

func (api *API) Logout(c *gin.Context) {
	http.SetCookie(c.Writer, &http.Cookie{
		Name:    "token",
		Value:   "",
		Expires: time.Unix(0, 0),
	})
	c.JSON(http.StatusOK, gin.H{
		"code":    http.StatusOK,
		"message": "Logout Success",
	})
}
