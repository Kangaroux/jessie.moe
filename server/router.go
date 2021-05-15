package jessie_moe

import (
	"github.com/gorilla/mux"
	server "github.com/kangaroux/jessie_moe/internal"
)

func NewRouter() *mux.Router {
	r := mux.NewRouter()
	r.HandleFunc("/", server.HelloHandler)
	return r
}
