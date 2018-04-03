'use strict';var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_idb=require('idb'),_idb2=_interopRequireDefault(_idb);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var DBHelper=function(){function a(){_classCallCheck(this,a)}return _createClass(a,null,[{key:'createIndexedDB',value:function(){return'indexedDB'in window?_idb2.default.open('restaurantReview',1,function(a){if(!a.objectStoreNames.contains('restaurants'))a.createObjectStore('restaurants',{keyPath:'id'})}):null}},{key:'fetchRestaurants',value:function(b){fetch(a.DATABASE_URL).then(function(a){return a.json()}).then(function(a){return b(null,a)})}},{key:'saveRestaurantDataLocally',value:function(b){return'indexedDB'in window?a.createIndexedDB().then(function(a){var c=a.transaction('restaurants','readwrite'),d=c.objectStore('restaurants');return Promise.all(b.map(function(a){return d.put(a)})).catch(function(){throw c.abort(),Error('Events were not added to the store')})}):null}},{key:'fetchRestaurantById',value:function(b,c){a.fetchRestaurants(function(a,d){if(a)c(a,null);else{var e=d.find(function(a){return a.id==b});e?c(null,e):c('Restaurant does not exist',null)}})}},{key:'fetchRestaurantByCuisineAndNeighborhood',value:function(b,c,d){a.fetchRestaurants(function(a,e){if(a)d(a,null);else{var f=e;'all'!=b&&(f=f.filter(function(a){return a.cuisine_type==b})),'all'!=c&&(f=f.filter(function(a){return a.neighborhood==c})),d(null,f)}})}},{key:'fetchNeighborhoods',value:function(b){a.fetchRestaurants(function(a,c){if(a)b(a,null);else{var d=c.map(function(a,b){return c[b].neighborhood}),e=d.filter(function(a,b){return d.indexOf(a)==b});b(null,e)}})}},{key:'fetchCuisines',value:function(b){a.fetchRestaurants(function(a,c){if(a)b(a,null);else{var d=c.map(function(a,b){return c[b].cuisine_type}),e=d.filter(function(a,b){return d.indexOf(a)==b});b(null,e)}})}},{key:'urlForRestaurant',value:function(a){return'./restaurant.html?id='+a.id}},{key:'imageUrlForRestaurant',value:function(a){return'/images/'+a.id}},{key:'mapMarkerForRestaurant',value:function(b,c){var d=new google.maps.Marker({position:b.latlng,title:b.name,url:a.urlForRestaurant(b),map:c,animation:google.maps.Animation.DROP});return d}},{key:'DATABASE_URL',get:function(){return'http://localhost:'+1337+'/restaurants'}}]),a}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiaGVscGVyLmpzIl0sIm5hbWVzIjpbIm9iamVjdFN0b3JlTmFtZXMiLCJyZXN0YXVyYW50T1MiLCJEQkhlbHBlciIsIkRBVEFCQVNFX1VSTCIsInJlc3BvbnNlIiwianNvbiIsIndpbmRvdyIsImRiIiwidHJhbnNhY3Rpb24iLCJzdG9yZSIsInJlc3RhdXJhbnQiLCJtYXAiLCJwdXQiLCJ0eCIsImFib3J0IiwiRXJyb3IiLCJmZXRjaFJlc3RhdXJhbnRzIiwiZXJyb3IiLCJjYWxsYmFjayIsInJlc3RhdXJhbnRzIiwiZmluZCIsIm5laWdoYm9yaG9vZCIsInJlc3VsdHMiLCJuZWlnaGJvcmhvb2RzIiwidW5pcXVlTmVpZ2hib3Job29kcyJdLCJtYXBwaW5ncyI6InlRQUFBLDhPQUNBLEksQUFEQSw2SEFlMkIsQUFDckIsQUFBSSxPQUFFLGFBQU4sQUFBSSxBQUFpQixBQUFTLEFBQUMsUUFDeEIsY0FBQSxBQUFJLEtBQUosQUFBUyxtQkFBVCxBQUE2QixFQUFHLEFBQVMsV0FBVyxBQUN2RCxJQUFJLENBQUMsRUFBQSxBQUFVLGlCQUFWLEFBQTJCLFNBQWhDLEFBQUssQUFBb0MsQUFBZ0IsQUFDckQsQUFBTSxlQUFlLEVBQUEsQUFBVSxrQkFBVixBQUE0QixjQUFlLENBQUMsUUFBakUsQUFBcUIsQUFBMkMsQUFBVSxBQUM3RSxBQUNKLE1BSkQsQUFBTyxBQUtWLEdBTmtDLEFBQU8sQUFBTSxBQUM1QyxJQUQrQixpQyxBQUVaQSxXQUFBQSxBQUNYLE9BQUEsRUFBQSxBQUFNQyxjQUFOLEFBQ0gsS0FBQSxXQUFBLE9BQUEsR0FBQSxNQURHLEdBQUEsQUFGUixLQUFBLFdBQUEsT0FBQSxHQUFBLE9BRVEsQUFHWCw0QyxBQUVELFdBQUEsQUFVTSxBQUFJLE9BQUUsYUFBTixBQUFJLEFBQWlCLEFBQVMsQUFBQyxRQUN4QixFQUFBLEFBQVMsa0JBQVQsQUFBMkIsS0FBSyxXQUFNLEFBQ3pDLElBQU0sR0FBSyxFQUFBLEFBQUcsWUFBSCxBQUFlLGNBQTFCLEFBQVcs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Z0JBOUlELDZCQUkwQixBQUN4QixBQUFNLE9BVlYsb0JBVUksQUFBYSxBQVZqQixLQVlHIiwiZmlsZSI6ImRiaGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlkYiBmcm9tICdpZGInXHJcbi8qKlxyXG4gKiBDb21tb24gZGF0YWJhc2UgaGVscGVyIGZ1bmN0aW9ucy5cclxuICovXHJcbmNsYXNzIERCSGVscGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YWJhc2UgVVJMLlxyXG4gICAqIENoYW5nZSB0aGlzIHRvIHJlc3RhdXJhbnRzLmpzb24gZmlsZSBsb2NhdGlvbiBvbiB5b3VyIHNlcnZlci5cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IERBVEFCQVNFX1VSTCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSAxMzM3O1xyXG4gICAgcmV0dXJuIGBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vcmVzdGF1cmFudHNgO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZUluZGV4ZWREQigpIHtcclxuICAgICAgaWYgKCEoJ2luZGV4ZWREQicgaW4gd2luZG93KSkge3JldHVybiBudWxsO31cclxuICAgICAgcmV0dXJuIGlkYi5vcGVuKCdyZXN0YXVyYW50UmV2aWV3JywgMSwgZnVuY3Rpb24odXBncmFkZURiKSB7XHJcbiAgICAgICAgICBpZiAoIXVwZ3JhZGVEYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKCdyZXN0YXVyYW50cycpKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzdGF1cmFudE9TID0gdXBncmFkZURiLmNyZWF0ZU9iamVjdFN0b3JlKCdyZXN0YXVyYW50cycsIHtrZXlQYXRoOiAnaWQnfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggYWxsIHJlc3RhdXJhbnRzLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBmZXRjaFJlc3RhdXJhbnRzKGNhbGxiYWNrKSB7XHJcbiAgICAgIGZldGNoKERCSGVscGVyLkRBVEFCQVNFX1VSTClcclxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKHJlc3RhdXJhbnRzID0+IGNhbGxiYWNrKG51bGwsIHJlc3RhdXJhbnRzKSk7XHJcbiAgfVxyXG5cclxuICAgIHN0YXRpYyBzYXZlUmVzdGF1cmFudERhdGFMb2NhbGx5KHJlc3RhdXJhbnQpIHtcclxuICAgICAgICBpZiAoISgnaW5kZXhlZERCJyBpbiB3aW5kb3cpKSB7cmV0dXJuIG51bGw7fVxyXG4gICAgICAgIHJldHVybiBEQkhlbHBlci5jcmVhdGVJbmRleGVkREIoKS50aGVuKGRiID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbigncmVzdGF1cmFudHMnLCAncmVhZHdyaXRlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUoJ3Jlc3RhdXJhbnRzJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXN0YXVyYW50Lm1hcChldmVudCA9PiBzdG9yZS5wdXQoZXZlbnQpKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHguYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignRXZlbnRzIHdlcmUgbm90IGFkZGVkIHRvIHRoZSBzdG9yZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIGEgcmVzdGF1cmFudCBieSBpdHMgSUQuXHJcbiAgICovXHJcbiAgc3RhdGljIGZldGNoUmVzdGF1cmFudEJ5SWQoaWQsIGNhbGxiYWNrKSB7XHJcbiAgICAvLyBmZXRjaCBhbGwgcmVzdGF1cmFudHMgd2l0aCBwcm9wZXIgZXJyb3IgaGFuZGxpbmcuXHJcbiAgICBEQkhlbHBlci5mZXRjaFJlc3RhdXJhbnRzKChlcnJvciwgcmVzdGF1cmFudHMpID0+IHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnQgPSByZXN0YXVyYW50cy5maW5kKHIgPT4gci5pZCA9PSBpZCk7XHJcbiAgICAgICAgaWYgKHJlc3RhdXJhbnQpIHsgLy8gR290IHRoZSByZXN0YXVyYW50XHJcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN0YXVyYW50KTtcclxuICAgICAgICB9IGVsc2UgeyAvLyBSZXN0YXVyYW50IGRvZXMgbm90IGV4aXN0IGluIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgICAgY2FsbGJhY2soJ1Jlc3RhdXJhbnQgZG9lcyBub3QgZXhpc3QnLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggcmVzdGF1cmFudHMgYnkgYSBjdWlzaW5lIGFuZCBhIG5laWdoYm9yaG9vZCB3aXRoIHByb3BlciBlcnJvciBoYW5kbGluZy5cclxuICAgKi9cclxuICBzdGF0aWMgZmV0Y2hSZXN0YXVyYW50QnlDdWlzaW5lQW5kTmVpZ2hib3Job29kKGN1aXNpbmUsIG5laWdoYm9yaG9vZCwgY2FsbGJhY2spIHtcclxuICAgIC8vIEZldGNoIGFsbCByZXN0YXVyYW50c1xyXG4gICAgREJIZWxwZXIuZmV0Y2hSZXN0YXVyYW50cygoZXJyb3IsIHJlc3RhdXJhbnRzKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IHJlc3RhdXJhbnRzXHJcbiAgICAgICAgaWYgKGN1aXNpbmUgIT0gJ2FsbCcpIHsgLy8gZmlsdGVyIGJ5IGN1aXNpbmVcclxuICAgICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmZpbHRlcihyID0+IHIuY3Vpc2luZV90eXBlID09IGN1aXNpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmVpZ2hib3Job29kICE9ICdhbGwnKSB7IC8vIGZpbHRlciBieSBuZWlnaGJvcmhvb2RcclxuICAgICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmZpbHRlcihyID0+IHIubmVpZ2hib3Job29kID09IG5laWdoYm9yaG9vZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdHMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIGFsbCBuZWlnaGJvcmhvb2RzIHdpdGggcHJvcGVyIGVycm9yIGhhbmRsaW5nLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBmZXRjaE5laWdoYm9yaG9vZHMoY2FsbGJhY2spIHtcclxuICAgIC8vIEZldGNoIGFsbCByZXN0YXVyYW50c1xyXG4gICAgREJIZWxwZXIuZmV0Y2hSZXN0YXVyYW50cygoZXJyb3IsIHJlc3RhdXJhbnRzKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBHZXQgYWxsIG5laWdoYm9yaG9vZHMgZnJvbSBhbGwgcmVzdGF1cmFudHNcclxuICAgICAgICBjb25zdCBuZWlnaGJvcmhvb2RzID0gcmVzdGF1cmFudHMubWFwKCh2LCBpKSA9PiByZXN0YXVyYW50c1tpXS5uZWlnaGJvcmhvb2QpO1xyXG4gICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGVzIGZyb20gbmVpZ2hib3Job29kc1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZU5laWdoYm9yaG9vZHMgPSBuZWlnaGJvcmhvb2RzLmZpbHRlcigodiwgaSkgPT4gbmVpZ2hib3Job29kcy5pbmRleE9mKHYpID09IGkpXHJcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgdW5pcXVlTmVpZ2hib3Job29kcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggYWxsIGN1aXNpbmVzIHdpdGggcHJvcGVyIGVycm9yIGhhbmRsaW5nLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBmZXRjaEN1aXNpbmVzKGNhbGxiYWNrKSB7XHJcbiAgICAvLyBGZXRjaCBhbGwgcmVzdGF1cmFudHNcclxuICAgIERCSGVscGVyLmZldGNoUmVzdGF1cmFudHMoKGVycm9yLCByZXN0YXVyYW50cykgPT4ge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjYWxsYmFjayhlcnJvciwgbnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gR2V0IGFsbCBjdWlzaW5lcyBmcm9tIGFsbCByZXN0YXVyYW50c1xyXG4gICAgICAgIGNvbnN0IGN1aXNpbmVzID0gcmVzdGF1cmFudHMubWFwKCh2LCBpKSA9PiByZXN0YXVyYW50c1tpXS5jdWlzaW5lX3R5cGUpXHJcbiAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZXMgZnJvbSBjdWlzaW5lc1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZUN1aXNpbmVzID0gY3Vpc2luZXMuZmlsdGVyKCh2LCBpKSA9PiBjdWlzaW5lcy5pbmRleE9mKHYpID09IGkpXHJcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgdW5pcXVlQ3Vpc2luZXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc3RhdXJhbnQgcGFnZSBVUkwuXHJcbiAgICovXHJcbiAgc3RhdGljIHVybEZvclJlc3RhdXJhbnQocmVzdGF1cmFudCkge1xyXG4gICAgcmV0dXJuIChgLi9yZXN0YXVyYW50Lmh0bWw/aWQ9JHtyZXN0YXVyYW50LmlkfWApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzdGF1cmFudCBpbWFnZSBVUkwuXHJcbiAgICovXHJcbiAgc3RhdGljIGltYWdlVXJsRm9yUmVzdGF1cmFudChyZXN0YXVyYW50KSB7XHJcbiAgICByZXR1cm4gKGAvaW1hZ2VzLyR7cmVzdGF1cmFudC5pZH1gKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcCBtYXJrZXIgZm9yIGEgcmVzdGF1cmFudC5cclxuICAgKi9cclxuICBzdGF0aWMgbWFwTWFya2VyRm9yUmVzdGF1cmFudChyZXN0YXVyYW50LCBtYXApIHtcclxuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBwb3NpdGlvbjogcmVzdGF1cmFudC5sYXRsbmcsXHJcbiAgICAgIHRpdGxlOiByZXN0YXVyYW50Lm5hbWUsXHJcbiAgICAgIHVybDogREJIZWxwZXIudXJsRm9yUmVzdGF1cmFudChyZXN0YXVyYW50KSxcclxuICAgICAgbWFwOiBtYXAsXHJcbiAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1B9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG1hcmtlcjtcclxuICB9XHJcbn0iXX0=
