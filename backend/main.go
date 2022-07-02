package main

import (
	"auth/api"
	"auth/database"
	"auth/repo"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := database.Connect()
	if err != nil {
		panic(err)
	}

	user_repo := repo.NewUserRepository(db)
	scholarships_repo := repo.NewScholarshipsRepository(db)
	main_api := api.NewAPI(*user_repo, *scholarships_repo)

	main_api.Start()
}
