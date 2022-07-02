package api

import (
	"auth/repo"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type UserListErrorResponse struct {
	Error string `json:"error"`
}

type ListUser struct {
	Id       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Jenjang  string `json:"jenjang"`
	Kota     string `json:"kota"`
	Role     string `json:"role"`
}

type UserListSuccessResponse struct {
	Users []ListUser `json:"users"`
}

func (a *API) getUser(c *gin.Context) {
	user, err := a.userRepo.GetAll()
	if err != nil {
		var userListErrorResponse UserListErrorResponse
		userListErrorResponse.Error = err.Error()
		c.JSON(http.StatusInternalServerError, userListErrorResponse)
		return
	}
	c.JSON(http.StatusOK, user)

}

func (a *API) GetByName(c *gin.Context) {
	username := c.Param("username")
	user, err := a.userRepo.GetByName(username)
	if err != nil {
		var userListErrorResponse UserListErrorResponse
		userListErrorResponse.Error = err.Error()
		c.JSON(http.StatusInternalServerError, userListErrorResponse)
		return
	}
	c.JSON(http.StatusOK, user)
}

func (a *API) GetById(c *gin.Context) {
	id := c.Param("id")
	user, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	data, err := a.userRepo.GetById(int(user))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Id berhasil ditemukan",
		"data":    data,
	})
}

func (a *API) DeleteUser(c *gin.Context) {
	id := c.Param("id")
	user, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	err = a.userRepo.Delete(int(user))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Id berhasil dihapus",
	})
}

// User bisa mengupadate data user

func (a *API) UpdateUser(c *gin.Context) {
	id := c.Param("id")
	user, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	var userUpdateRequest repo.User
	err = c.ShouldBindJSON(&userUpdateRequest)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	data, err := a.userRepo.Update(int(user), userUpdateRequest)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Id berhasil diupdate",
		"data":    data,
	})
}

func (a *API) DeleteUserFromEmail(c *gin.Context) {
	email := c.Param("email")

	err := a.userRepo.DeleteUserFromEmail(email)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "user berhasil dihapus",
	})
}
