package main

import (
	"fmt"
	"log"
	"net/http"

	server "github.com/kangaroux/jessie_moe/internal"
)

func main() {
	r := server.NewRouter()

	fmt.Println("listening on :8080")
	err := http.ListenAndServe(":8080", r)

	if err != nil {
		log.Fatal(err)
	}
}
