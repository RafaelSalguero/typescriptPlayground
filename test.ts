/**match an href to an url pattern, return a non null object with the url paramters if the href matches the pattern, else, returns null */
function match(href: string, urlPattern: string): { [param: string]: string } {
    if (href == "" || href == "#" && urlPattern == "")
        return {}
    else if (href.lastIndexOf("#/", 0) == 0) {
        //if href starts with "#/"
        var patternParts = urlPattern.split("/");
        var hrefS = href.substr(2);

        var hrefParts = hrefS.split("/");

        //href have the same part number as the pattern
        if (hrefParts.length == patternParts.length) {
            var result: { [param: string]: string } = {};
            for (var i = 0; i < hrefParts.length; i++) {
                let urlPart = hrefParts[i];
                var patternPart = patternParts[i];

                if (patternPart.lastIndexOf(":", 0) == 0) {
                    //An url paramter
                    let paramName = patternPart.substr(1);
                    result[paramName] = urlPart;
                } else if (urlPart != patternPart) {
                    //The url and the pattern doesn't math on a constant part
                    return null;
                }
            }

            //All contant parts matches
            return result;
        }
    }
    return null;
}

console.log("hello");