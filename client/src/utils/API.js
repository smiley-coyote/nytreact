import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "api-key=264b4641417640fc92d2a79d0e4636a7&q=";


export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + query);
  },
  getArticles: function() {
    return axios.get("/api/saved");
  },
  saveArticle: function(data){
    return axios.post("api/saved/", data)
  },
  deleteArticle: function(id){
    return axios.delete("api/saved/" + id)
  }
};

// date examples:
//  'begin_date': "20000112",
  // 'end_date': "20100112"
