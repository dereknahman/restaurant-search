import axios from "axios";

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization:
      "Bearer qRqFtEsCWcJePJDCXngsAUEwuChFgnVTDlgaJGwRufsLKJp_FXIQkBU548jlmfIFrx_tfy-8hlv3OKXrKEDp9Jz3pticqgZxhP1bvdrWvioTrNBVc0sN0KnqrJ-yXnYx",
  },
});
