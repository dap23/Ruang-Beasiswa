package repo

import (
	"database/sql"
)

type ScholarshipsRepository struct {
	db *sql.DB
}

func NewScholarshipsRepository(db *sql.DB) *ScholarshipsRepository {
	return &ScholarshipsRepository{db: db}
}

func (s *ScholarshipsRepository) Upload(beasiswa Scholarship) (Scholarship, error) {
	sqlStatement := `INSERT INTO scholarship (name, jenjang, kota, description, kategori, image) VALUES (?, ?, ?, ?, ?, ?);`

	_, err := s.db.Exec(sqlStatement, beasiswa.Name, beasiswa.Jenjang, beasiswa.Kota, beasiswa.Description, beasiswa.Kategori, beasiswa.Image)
	if err != nil {
		return Scholarship{}, err

	}
	return beasiswa, nil
}

func (s *ScholarshipsRepository) GetAll() ([]Scholarship, error) {
	sqlStatement := `SELECT * FROM scholarship;`

	rows, err := s.db.Query(sqlStatement)
	if err != nil {
		return nil, err
	}
	var scholarships []Scholarship
	for rows.Next() {
		var scholarship Scholarship
		err = rows.Scan(&scholarship.Id, &scholarship.Name, &scholarship.Jenjang, &scholarship.Kota, &scholarship.Description, &scholarship.Kategori, &scholarship.Image, &scholarship.CreatedAt)
		if err != nil {
			return nil, err
		}
		scholarships = append(scholarships, scholarship)
	}
	return scholarships, nil
}

func (s *ScholarshipsRepository) GetById(id int) (Scholarship, error) {
	sqlStatement := `SELECT * FROM scholarship WHERE id = ?;`

	row := s.db.QueryRow(sqlStatement, id)
	var scholarship Scholarship
	err := row.Scan(&scholarship.Id, &scholarship.Name, &scholarship.Jenjang, &scholarship.Kota, &scholarship.Description, &scholarship.Kategori, &scholarship.Image, &scholarship.CreatedAt)
	if err != nil {
		return scholarship, err
	}
	return scholarship, nil
}

func (s *ScholarshipsRepository) GetByJenjang(jenjang string) ([]Scholarship, error) {
	sqlStatement := `SELECT * FROM scholarship WHERE jenjang = ?;`

	rows, err := s.db.Query(sqlStatement, jenjang)
	if err != nil {
		return nil, err
	}
	var scholarships []Scholarship
	for rows.Next() {
		var scholarship Scholarship
		err = rows.Scan(&scholarship.Id, &scholarship.Name, &scholarship.Jenjang, &scholarship.Kota, &scholarship.Description, &scholarship.Kategori, &scholarship.Image, &scholarship.CreatedAt)
		if err != nil {
			return nil, err
		}
		scholarships = append(scholarships, scholarship)
	}
	return scholarships, nil
}

func (s *ScholarshipsRepository) GetByKota(kota string) ([]Scholarship, error) {
	sqlStatement := `SELECT * FROM scholarship WHERE kota = ?;`

	rows, err := s.db.Query(sqlStatement, kota)
	if err != nil {
		return nil, err
	}
	var scholarships []Scholarship
	for rows.Next() {
		var scholarship Scholarship
		err = rows.Scan(&scholarship.Id, &scholarship.Name, &scholarship.Jenjang, &scholarship.Kota, &scholarship.Description, &scholarship.Kategori, &scholarship.Image, &scholarship.CreatedAt)
		if err != nil {
			return nil, err
		}
		scholarships = append(scholarships, scholarship)
	}
	return scholarships, nil
}

func (s *ScholarshipsRepository) GetByName(name string) ([]Scholarship, error) {
	sqlStatement := `SELECT * FROM scholarship WHERE name = ?;`

	rows, err := s.db.Query(sqlStatement, name)
	if err != nil {
		return nil, err
	}
	var scholarships []Scholarship
	for rows.Next() {
		var scholarship Scholarship
		err = rows.Scan(&scholarship.Id, &scholarship.Name, &scholarship.Jenjang, &scholarship.Kota, &scholarship.Description, &scholarship.Kategori, &scholarship.Image, &scholarship.CreatedAt)
		if err != nil {
			return nil, err
		}
		scholarships = append(scholarships, scholarship)
	}
	return scholarships, nil
}

func (s *ScholarshipsRepository) GetByKategori(kategori string) ([]Scholarship, error) {
	sqlStatement := `SELECT * FROM scholarship WHERE kategori = ?;`

	rows, err := s.db.Query(sqlStatement, kategori)
	if err != nil {
		return nil, err
	}
	var scholarships []Scholarship
	for rows.Next() {
		var scholarship Scholarship
		err = rows.Scan(&scholarship.Id, &scholarship.Name, &scholarship.Jenjang, &scholarship.Kota, &scholarship.Description, &scholarship.Kategori, &scholarship.Image, &scholarship.CreatedAt)
		if err != nil {
			return nil, err
		}
		scholarships = append(scholarships, scholarship)
	}
	return scholarships, nil
}

func (s *ScholarshipsRepository) Delete(id int) (Scholarship, error) {
	res, err := s.GetById(id)
	if err != nil {
		return res, err
	}
	sqlStatement := `DELETE FROM scholarship WHERE id = ?;`

	_, err = s.db.Exec(sqlStatement, id)
	if err != nil {
		return Scholarship{}, err
	}
	return res, nil
}

func (s *ScholarshipsRepository) Update(id int, beasiswa Scholarship) (Scholarship, error) {
	sqlStatement := `UPDATE scholarship SET name = ?, description = ?, jenjang = ?, kota = ?, kategori = ?, image = ? WHERE id = ?;`

	_, err := s.db.Exec(sqlStatement, beasiswa.Name, beasiswa.Description, beasiswa.Jenjang, beasiswa.Kota, beasiswa.Kategori, beasiswa.Image, id)
	if err != nil {
		return Scholarship{}, err
	}
	return beasiswa, nil
}
