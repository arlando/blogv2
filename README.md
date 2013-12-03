#BLOGV2

**Built with:**

* NodeJS for SocketIO and API

* nginx for serving static dist assets

* Express for server

* SocketIO for messaging

* Baucis for quick API creation

* Mongo for post persistence

* Marionette for MV* JavaScript with an AMD architecture

#Seeking an encapsulated architecture using Backbone Marionette
#####1. Modularity by separating functionality of site into discrete parts
#####2. Encapsulation of Event Bubbling [no more extending the global event bus]
#####3. Router Usage
#####4. App.vent triggers delegate down from the main app to the module
#####5. Module Layouts listen to events on subviews (item/collection views) delegates appropriately