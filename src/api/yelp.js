import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer OH872X_tGGVccWbvHDsYp_cc_KjZ0DLmXwS1SYHw52xhUYIlqXou6s5tbzy7-6pWaSFVPDFO2VY-sAqDvJiZakqom74_Hs7JGiKTLbR63jAzYR1mdWk_nKzqVCoVYHYx",
  },
});
