package api

type reqLogin struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}
