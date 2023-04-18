package entity

import (
	"gorm.io/gorm"
)

type CourseType struct {
	gorm.Model
	Name string

	Courses []Course `gorm:"foreignKey:CourseTypeID"`
}

type Course struct {
	gorm.Model
	C_ID         string
	CourseTypeID *uint
	CourseType   CourseType `gorm:"references:id"`
	Title        string
	Description  string
	CoverImage   string
	Author       string
	Link         string
	Slug         string
	Wsl          []string `gorm: "type:SET"`
	// Wsl          []string `gorm:"type:TEXT"`
}
