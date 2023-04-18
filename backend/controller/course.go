package controller

import (
	"net/http"

	"github.com/B6311636/marketplace-eth/entity"
	"github.com/gin-gonic/gin"
)

// POST /courses
func CreateCourse(c *gin.Context) {
	var course entity.Course
	if err := c.ShouldBindJSON(&course); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := entity.DB().Create(&course).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"data": course})
}

// GET /course/:id
func GetCourse(c *gin.Context) {
	var course entity.Course
	id := c.Param("id")
	if tx := entity.DB().Where("id = ?", id).First(&course); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "course not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": course})
}

// GET /courses
func ListCourses(c *gin.Context) {
	var courses []entity.Course
	if err := entity.DB().Raw("SELECT * FROM courses").Scan(&courses).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": courses})
}

// DELETE /courses/:id
func DeleteCourse(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM courses WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "course not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /courses
func UpdateCourse(c *gin.Context) {
	var course entity.Course
	if err := c.ShouldBindJSON(&course); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if tx := entity.DB().Where("id = ?", course.C_ID).First(&course); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "branch not found"})
		return
	}

	if err := entity.DB().Save(&course).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": course})
}
