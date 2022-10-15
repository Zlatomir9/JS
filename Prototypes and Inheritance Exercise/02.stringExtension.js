(function solve() {
    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
            return str + this.toString();
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
            return this.toString() + str;
        }
        return this.toString();
    }

    String.prototype.isEmpty = function () {
        if (this.toString().length == 0) {
            return true;
        }
        return false;
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (this.toString().length <= n) {
            return this.toString();
        } else {
            let lastIndex = this.toString().substring(0, n - 2).lastIndexOf(' ');
            if (lastIndex != -1) {
                return this.toString().substring(0, lastIndex) + '...';
            } else {
                return this.toString().substring(0, n - 3) + '...';
            }
        }
    }

    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            if (string.includes(`{${i}}`)) {
                string = string.replace(`{${i}}`, params[i]);
            }
        }

        return string;
    };
})();