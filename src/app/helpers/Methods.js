export default class Methods {
  empty(e) {

    if (e === "" || e === 0 || e === "0" || typeof (e) === "undefined" || e === null || e === "null") {
      return true;
    }
    else {
      return false;
    }
  }

  default(e, defaultValue) {
    return !this.empty(e) ? e : defaultValue;
  }


  getInvestmentStatusColor(status) {
    if (status === "Completed") return { color: "green", class: "bg-success" };
    if (status === "Active") return { color: "blue", class: "bg-primary" };
    if (status === "Pending") return { color: "grey", class: "bg-grey" };
    if (status === "Cancelled") return { color: "red", class: "bg-danger" };
  }

  serialize(object, url = "") {
    var str = [];
    for (var val in object)
      if (object.hasOwnProperty(val)) {
        str.push(encodeURIComponent(val) + "=" + encodeURIComponent(object[val]));
      }
    if (url.includes("?page=")) {
      return this.empty(url) ? str.join("&") : url + "&" + str.join("&");
    }
    return this.empty(url) ? str.join("&") : url + "?" + str.join("&");
  }


  stringify(value) {
    value = this.default(value, '');
    let stringHolder = "Bearer ";
    for (let val in value) {
      stringHolder = stringHolder.concat(value[val]);
    }
    return stringHolder;
  }


  setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  }

  getUserGreeting() {
    // let format = "";
    let greeting = "";
    var ndate = new Date();
    var hr = ndate.getHours();
    if (hr < 12) {
      greeting = 'Good Morning';
      // format = 'AM';
    }
    else if (hr >= 12 && hr <= 17) {
      greeting = 'Good Afternoon';
      // format = 'PM';
    }
    else if (hr >= 17 && hr <= 24)
      greeting = 'Good Evening';

    return greeting;

  }

}
