package api

import (
	"github.com/golang-jwt/jwt/v4"
)

var jwtKey = []byte("secret")

type Claims struct {
	Id       int    `json:"id"`
	Email    string `json:"email"`
	Username string `json:"username"`
	Jenjang  string `json:"jenjang"`
	Kota     string `json:"kota"`
	Image    string `json:"image"`
	Role     string `json:"role"`
	jwt.StandardClaims
}
