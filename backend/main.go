package main

import (
	Course "github.com/B6311636/marketplace-eth/controller"
	"github.com/B6311636/marketplace-eth/entity"
	"github.com/gin-gonic/gin"
)

func main() {
	entity.SetupDatabase()
	r := gin.Default()
	r.Use(CORSMiddleware())

	r.GET("/course/:id", Course.GetCourse)
	r.GET("/courses", Course.ListCourses)
	r.POST("/courses", Course.CreateCourse)
	r.PATCH("/courses/:id", Course.UpdateCourse)
	r.DELETE("/courses/id", Course.DeleteCourse)

	r.Run()
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	}
}
