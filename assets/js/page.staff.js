! function(e) {
	var t = {};

	function r(n) {
		if (t[n]) return t[n].exports;
		var o = t[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
	}
	r.m = e, r.c = t, r.d = function(e, t, n) {
		r.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: n
		})
	}, r.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, r.t = function(e, t) {
		if (1 & t && (e = r(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if (r.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var o in e) r.d(n, o, function(t) {
				return e[t]
			}.bind(null, o));
		return n
	}, r.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return r.d(t, "a", t), t
	}, r.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, r.p = "/", r(r.s = 463)
}({
	463: function(e, t, r) {
		e.exports = r(464)
	},
	464: function(e, t) {
		! function() {
			"use strict";
			! function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "roundedBar",
					r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
				r = Chart.helpers.merge({
					title: {
						display: !0,
						fontSize: 12,
						fontColor: "rgba(54, 76, 102, 0.54)",
						position: "top",
						text: "EARNINGS"
					}
				}, r);
				var n = {
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					datasets: [{
						label: "Sales",
						data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
						barPercentage: .5,
						barThickness: 20
					}]
				};
				Charts.create(e, t, r, n)
			}("#ordersChart")
		}()
	}
});