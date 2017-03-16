App = Ember.Application.create({});


App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
 });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});


App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,
  
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
    }
  }
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});


var posts = [{
  id: '1',
  title: "The International",
  author: { name: "Ganesh Raj Manandhar" },
  date: new Date('12-27-2012'),
  excerpt: "The annual eSports tournament for the video game Dota 2.",
  body: "The International (TI) is an annual Dota 2 eSports tournament hosted by Valve Corporation, the game's developer. The first tournament took place in Cologne, Germany at Gamescom in 2011 and was held shortly after the public reveal of Dota 2, with a total prize pot of $1.6 million."
}, {
  id: '2',
  title: "Guitars",
  author: { name: "Niraj Shakya" },
  date: new Date('12-24-2012'),
  excerpt: "Fingerstyle guitar is the technique of playing the guitar by plucking the strings directly with the fingertips.",
  body: " The term fingerstyle is something of a misnomer, since it is present in several different genres and styles of music—but mostly, because it involves a completely different technique, not just a style of playing, especially for the guitarist's picking/plucking hand. The term is often used synonymously with fingerpicking, although fingerpicking can also refer to a specific tradition of folk, blues and country guitar playing in the US."  
},
{
  id: '3',
  title: "Python",
  author: { name:'Nitesh Ranjitkar'},
  date: new Date('12-12-2015'),
  excerpt: "This article is about the programming language. For the snake genus, see Python (genus)",
  body: "Python is a widely used high-level, general-purpose, interpreted, dynamic programming language.[24][25] Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code than possible in languages such as C++ or Java.The language provides constructs intended to enable writing clear programs on both a small and large scale."
},
{
  id: '4',
  title: "Ember.js",
  author: { name:'Rokin Maharjan'},
  date: new Date('12-12-2015'),
  excerpt: "Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel (MVVM) pattern.",
  body: "EEmber is used on many popular websites, including Discourse, Groupon, Vine, Live Nation, Nordstrom, Twitch.tv and Chipotle.Although primarily considered a framework for the web, it is also possible to build desktop and mobile applications in Ember.The most notable example of an Ember desktop application is Apple Music,a feature of the iTunes desktop application."
},
{
  id: '5',
  title: "Defense Of the Ancients",
  author: { name:'Suman Maharjan'},
  date: new Date('12-12-2015'),
  excerpt: "Defense of the Ancients (DotA) is a multiplayer online battle arena mod for the video game Warcraft III: Reign of Chaos and its expansion, Warcraft III: The Frozen Throne, based on the Aeon of Strife map for StarCraft. ",
  body: "he scenario was developed with the World Editor of Reign of Chaos, and was updated upon the release of its expansion, The Frozen Throne. There have been many variations of the original concept; the most popular being DotA Allstars, which eventually was simplified to DotA with the release of version 6.68."
}
];



