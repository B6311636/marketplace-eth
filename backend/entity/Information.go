package entity

import (
	"gorm.io/gorm"
)

func SetupIntoDatabase(db *gorm.DB) {

	t1001 := CourseType{
		Name: "Next JS",
	}
	db.Model(&CourseType{}).Create(&t1001)

	// create a new linked list
	wsl := []string{
		"Build Next JS apps on your own",
		"Build ecommerce apps with modern technologies",
		"Use Shopify to your advantage",
	}

	db.Model(&Course{}).Create(&Course{
		C_ID:        "1410474",
		CourseType:  t1001,
		Title:       "Next JS & Typescript with Shopify Integration - Full Guide",
		Description: "Learn modern Next JS(Next 10+). Code everything in Typescript and integrate with Shopify.",
		CoverImage:  "https://thrangra.sirv.com/Next_TypeScript_Shopify_Final.jpg",
		Author:      "Filip Jerga",
		Link:        "https://academy.eincode.com/courses/next-js-typescript-with-shopify-integration-full-guide",
		Slug:        "next-js-typescript-with-shopify-integration-full-guide",
		Wsl:         wsl,
	})

	var course1 Course
	db.Raw("SELECT * FROM courses WHERE id = ?", "1").Scan(&course1)

}
