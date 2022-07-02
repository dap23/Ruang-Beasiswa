package api

import (
	"fmt"

	"auth/repo"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type API struct {
	userRepo        repo.UserRepository
	scholarshipRepo repo.ScholarshipsRepository
	gin             *gin.Engine
}

func NewAPI(userRepo repo.UserRepository, scholarshipRepo repo.ScholarshipsRepository) *API {
	gin := gin.Default()
	gin.Use(cors.Default())

	api := &API{
		userRepo:        userRepo,
		scholarshipRepo: scholarshipRepo,
		gin:             gin,
	}

	gin.POST("/api/login", api.login)
	gin.POST("/api/register", api.Register)
	gin.POST("/api/logout", api.Logout)
	gin.PUT("/api/user/:id", api.UpdateUser)
	gin.DELETE("/api/user/:id", api.DeleteUser)
	gin.GET("/api/user", api.getUser)
	gin.GET("/api/user/:id", api.GetById)
	gin.GET("/api/scholarships", api.getScholarships)
	gin.GET("/api/scholarships/id/:id", api.getScholarshipsById)
	gin.GET("/api/scholarships/jenjang/:jenjang", api.getScholarshipsByJenjang)
	gin.GET("/api/scholarships/name/:name", api.getScholarshipsByName)
	gin.GET("/api/scholarships/kota/:kota", api.getScholarshipsByKota)
	gin.GET("/api/scholarships/kategori/:kategori", api.getScholarshipsByKategori)
	gin.POST("/api/scholarships/upload", api.uploadScholarships)
	gin.PUT("/api/scholarships/:id", api.Updatebeasiswa)
	gin.DELETE("/api/scholarships/:id", api.DeleteScholarships)
	//Delete User untuk testing
	gin.DELETE("/deleteUser/:email", api.DeleteUserFromEmail)

	return api
}

func (api *API) Handler() *gin.Engine {
	return api.gin
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	api.Handler().Run(":8080")
}
