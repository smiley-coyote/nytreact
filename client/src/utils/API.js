import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "api-key:264b4641417640fc92d2a79d0e4636a7q:";


export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + query);
  }
};

// date examples:
//  'begin_date': "20000112",
  // 'end_date': "20100112"
