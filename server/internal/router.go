package server

import (
	"github.com/gorilla/mux"
)

func NewRouter() *mux.Router {
	r := mux.NewRouter()
	r.Use(RequestLogMiddleware)
	r.HandleFunc("/", HelloHandler)
	return r
}
