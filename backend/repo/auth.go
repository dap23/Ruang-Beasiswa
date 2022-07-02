package repo

import (
	"database/sql"
	"fmt"

	"golang.org/x/crypto/bcrypt"
)

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (s *UserRepository) Register(user User) (User, error) {
	password, _ := bcrypt.GenerateFromPassword([]byte(user.Password), 10)
	sqlStatement := `INSERT INTO user (username, password, email, jenjang, kota, image, role) VALUES (?, ?, ?, ?, ?, ?, ?);`

	_, err := s.db.Exec(sqlStatement, user.Username, string(password), user.Email, user.Jenjang, user.Kota, "https://res.cloudinary.com/wikitro/image/upload/v1656228746/ruang-beasiswa/download_iztpk3.png", "user")
	if err != nil {
		return User{}, err

	}
	return user, nil
}

func (u *UserRepository) CheckUser(email string) (*UserResponse, error) {
	sqlStatement := `SELECT * FROM user WHERE email = ? ;`

	rows, err := u.db.Query(sqlStatement, email)
	if err != nil {
		return nil, err
	}

	var user UserResponse
	for rows.Next() {
		err = rows.Scan(&user.Id, &user.Username, &user.Email, &user.Password, &user.Jenjang, &user.Kota, &user.Image, &user.Role)
		if err != nil {
			return nil, err
		}
	}

	return &user, nil
}

func (u *UserRepository) CheckUserRegis(value string) (*User, error) {
	sqlStatement := `SELECT * FROM user WHERE email = ?;`

	// rows, err := database.DB.Query(sqlStatement, value) <- sebelumnya
	rows, err := u.db.Query(sqlStatement, value)
	fmt.Println(rows, err)
	if err != nil {
		return nil, err
	}

	var user User
	for rows.Next() {
		err = rows.Scan(&user.Id, &user.Username, &user.Email, &user.Password, &user.Jenjang, &user.Kota, &user.Image, &user.Role)
		if err != nil {
			return nil, err
		}
	}
	return &user, nil
}

/////////////////////////////

func (u *UserRepository) GetAll() ([]User, error) {
	sqlStatement := `SELECT * FROM user;`

	rows, err := u.db.Query(sqlStatement)
	if err != nil {
		return nil, err
	}

	var users []User
	for rows.Next() {
		var user User
		err = rows.Scan(&user.Id, &user.Username, &user.Email, &user.Password, &user.Jenjang, &user.Kota, &user.Image, &user.Role)
		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}

	return users, nil
}

func (u *UserRepository) GetById(id int) (User, error) {
	sqlStatement := `SELECT * FROM user WHERE id = ?;`

	rows, err := u.db.Query(sqlStatement, id)
	if err != nil {
		return User{}, err
	}

	var user User
	for rows.Next() {
		err = rows.Scan(&user.Id, &user.Username, &user.Email, &user.Password, &user.Jenjang, &user.Kota, &user.Image, &user.Role)
		if err != nil {
			return User{}, err
		}
	}

	return user, nil
}

func (u *UserRepository) GetByName(username string) (User, error) {
	sqlStatement := `SELECT * FROM user WHERE username = ?;`

	rows, err := u.db.Query(sqlStatement, username)
	if err != nil {
		return User{}, err
	}

	var user User
	for rows.Next() {
		err = rows.Scan(&user.Id, &user.Username, &user.Email, &user.Password, &user.Jenjang, &user.Kota, &user.Image, &user.Role)
		if err != nil {
			return User{}, err
		}
	}

	return user, nil
}

func (u *UserRepository) Update(id int, baru User) (User, error) {
	password, _ := bcrypt.GenerateFromPassword([]byte(baru.Password), 10)
	sqlStatement := `UPDATE user SET username = ?, email = ?, password = ?, jenjang = ?, kota = ?, image= ?, WHERE id = ?;`

	_, err := u.db.Exec(sqlStatement, baru.Username, baru.Email, string(password), baru.Jenjang, baru.Kota, baru.Image, id)
	if err != nil {
		return User{}, err
	}

	return baru, nil
}

func (u *UserRepository) Delete(id int) error {
	sqlStatement := `DELETE FROM user WHERE id = ?;`

	_, err := u.db.Exec(sqlStatement, id)
	if err != nil {
		return err
	}

	return nil
}

func (u *UserRepository) DeleteUserFromEmail(email string) error {
	sqlStatement := `DELETE FROM user WHERE email = ?;`

	_, err := u.db.Exec(sqlStatement, email)
	if err != nil {
		return err
	}

	return nil
}
