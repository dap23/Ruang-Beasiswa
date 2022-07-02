package testing_api

import (
	"auth/api"
	repo "auth/repo"
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
	"net/http/httptest"
	"strings"

	_ "github.com/mattn/go-sqlite3"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
)

type DataUser struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Jenjang  string `json:"jenjang"`
	Kota     string `json:"kota"`
	Role     string `json:"role"`
}

type loginResponse struct {
	Code    int      `json:"code"`
	Data    DataUser `json:"data"`
	Message string   `json:"message"`
}

type regResponse struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}

var _ = Describe("Testing API", func() {
	When("Login", func() {
		It("should return login succes and user data when logged in", func() {
			db, err := sql.Open("sqlite3", "../../database.db")
			if err != nil {
				log.Fatal(err)
			}
			defer db.Close()

			readBody := strings.NewReader(`{"email":"login@gmail.com","password":"login"}`)

			userRepo := repo.NewUserRepository(db)
			scholarRepo := repo.NewScholarshipsRepository(db)

			route := api.NewAPI(*userRepo, *scholarRepo).Handler()

			w := httptest.NewRecorder()
			r, err := http.NewRequest("POST", "/api/login", readBody)
			if err != nil {
				log.Fatal(err)
			}

			route.ServeHTTP(w, r)

			var response loginResponse

			err = json.Unmarshal([]byte(w.Body.String()), &response)
			if err != nil {
				log.Fatal(err)
			}

			Expect(w.Code).To(Equal(http.StatusOK))
			Expect(response.Message).To(Equal("login success"))
			Expect(response.Data.Email).To(Equal("login@gmail.com"))
		})

		It("should return invalid message when email not exist", func() {
			db, err := sql.Open("sqlite3", "../../database.db")
			if err != nil {
				log.Fatal(err)
			}
			defer db.Close()

			readBody := strings.NewReader(`{"email":"loginInvalid@gmail.com","password":"login"}`)

			userRepo := repo.NewUserRepository(db)
			scholarRepo := repo.NewScholarshipsRepository(db)

			route := api.NewAPI(*userRepo, *scholarRepo).Handler()

			w := httptest.NewRecorder()
			r, err := http.NewRequest("POST", "/api/login", readBody)
			if err != nil {
				log.Fatal(err)
			}

			route.ServeHTTP(w, r)

			var response loginResponse

			err = json.Unmarshal([]byte(w.Body.String()), &response)
			if err != nil {
				log.Fatal(err)
			}

			Expect(w.Code).To(Equal(http.StatusUnauthorized))
			Expect(response.Message).To(Equal("user credential invalid"))
		})

		It("should return invalid message when password not match", func() {
			db, err := sql.Open("sqlite3", "../../database.db")
			if err != nil {
				log.Fatal(err)
			}
			defer db.Close()

			readBody := strings.NewReader(`{"email":"login@gmail.com","password":"loginInvalid"}`)

			userRepo := repo.NewUserRepository(db)
			scholarRepo := repo.NewScholarshipsRepository(db)

			route := api.NewAPI(*userRepo, *scholarRepo).Handler()

			w := httptest.NewRecorder()
			r, err := http.NewRequest("POST", "/api/login", readBody)
			if err != nil {
				log.Fatal(err)
			}

			route.ServeHTTP(w, r)

			var response loginResponse

			err = json.Unmarshal([]byte(w.Body.String()), &response)
			if err != nil {
				log.Fatal(err)
			}

			Expect(w.Code).To(Equal(http.StatusUnauthorized))
			Expect(response.Message).To(Equal("password invalid"))
		})

	})

	When("Register", func() {
		It("should return register success", func() {
			db, err := sql.Open("sqlite3", "../../database.db")
			if err != nil {
				log.Fatal(err)
			}
			defer db.Close()

			readBody := strings.NewReader(`{"username":"register","email":"register@gmail.com","password":"register","jenjang":"register","kota":"register"}`)

			userRepo := repo.NewUserRepository(db)
			scholarRepo := repo.NewScholarshipsRepository(db)

			route := api.NewAPI(*userRepo, *scholarRepo).Handler()

			r, err := http.NewRequest("POST", "/api/register", readBody)
			w := httptest.NewRecorder()
			if err != nil {
				log.Fatal(err)
			}

			route.ServeHTTP(w, r)

			var response regResponse

			err = json.Unmarshal([]byte(w.Body.String()), &response)
			if err != nil {
				log.Fatal(err)
			}

			Expect(w.Code).To(Equal(http.StatusOK))
			Expect(response.Message).To(Equal("Register Success"))

			//DELETE USER SO IT CAN USE FOR NEXT TEST
			readBodyforDel := strings.NewReader(`{"email":"register@gmail.com","password":"register"}`)
			r2, err := http.NewRequest("POST", "/api/login", readBodyforDel)
			w2 := httptest.NewRecorder()
			if err != nil {
				log.Fatal(err)
			}

			route.ServeHTTP(w2, r2)

			var responseforDel loginResponse
			err = json.Unmarshal([]byte(w2.Body.String()), &responseforDel)
			if err != nil {
				log.Fatal(err)
			}

			emailId := responseforDel.Data.Email

			route2 := api.NewAPI(*userRepo, *scholarRepo).Handler()
			r3, err := http.NewRequest("DELETE", "/deleteUser/"+emailId, nil)
			if err != nil {
				log.Fatal(err)
			}

			route2.ServeHTTP(w2, r3)
		})

		It("should return error when email registered", func() {
			db, err := sql.Open("sqlite3", "../../database.db")
			if err != nil {
				log.Fatal(err)
			}
			defer db.Close()

			readBody := strings.NewReader(`{"username":"register","email":"login@gmail.com","password":"register","jenjang":"register","kota":"register"}`)

			userRepo := repo.NewUserRepository(db)
			scholarRepo := repo.NewScholarshipsRepository(db)

			route := api.NewAPI(*userRepo, *scholarRepo).Handler()

			r, err := http.NewRequest("POST", "/api/register", readBody)
			w := httptest.NewRecorder()
			if err != nil {
				log.Fatal(err)
			}

			route.ServeHTTP(w, r)

			var response regResponse

			err = json.Unmarshal([]byte(w.Body.String()), &response)
			if err != nil {
				log.Fatal(err)
			}

			Expect(w.Code).To(Equal(http.StatusInternalServerError))
			Expect(response.Message).To(Equal("Email sudah terdaftar"))
		})
	})
})
