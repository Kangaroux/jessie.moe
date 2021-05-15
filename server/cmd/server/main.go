package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/kangaroux/jessie_moe"
)

func main() {
	r := jessie_moe.NewRouter()

	fmt.Println("listening on :8080")
	err := http.ListenAndServe(":8080", r)

	if err != nil {
		log.Fatal(err)
	}
}
