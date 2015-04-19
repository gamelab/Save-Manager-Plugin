#Save Manager Plugin v1.0.2
-------------------------

This is a free Kiwi plugin that provides an easy way for developers to manage different methods of saving information relating to a Kiwi Game. 

Included with this Plugin is also a LocalStorage method of saving data, which the SaveManager uses by default to save data/information locally on either a Browser or CocoonJS app. 

You can view a tutorial on [using the Save Manager Plugin](http://www.kiwijs.org/documentation/tutorials/using-the-savemanager-plugin/) on the [Kiwi.JS website](http://www.kiwijs.org/documentation/tutorials/using-the-savemanager-plugin/).

If you have any problems then feel free to contact us via our [contact page](http://www.kiwijs.org/help)


##Versions:
1.0.2
- Issue where the plugin could not update values when setting them to `false`

1.0.1
- General Bug fixes and updates.

1.0.0
- Initial Plugin created.


##How to Include: 

**First Step:**
Copy either the saveManager.js or the saveManager.min.js file (they should be right next to this one right now) into your project directory. We recommend that you save the files under a plugin directory that lives inside of your project directory so that you can easily manage all of the plugins but that is not required. 

**Second:**
Link in the JavaScript file (that you have just copied across in the first step) into your HTML file. Make sure you link it in underneath the link to the main Kiwi.js file otherwise the plugin will not register and you can come across some errors.

**Third:** 
Now that you have linked in the plugin, the next step is to tell the game to use this plugin. To do so, when you create a new Kiwi.Game you need to pass 'SaveGame' the confiration object's plugins item. You can see an example of the code below.

```
var game = new Kiwi.Game('domElement', 'GameName', 'State', { plugins: ["SaveGame"]});
```

Just make sure if you are including more than one System plugin that you pass other plugin's that you want to use also.

**Lastly:**
Now that you have successfully include the plugin you can start using it. You can access the 'saveManager' through the game object.


##How to use.

- [Saving data](#saving-information)
- [Loading data](#loading-information)
- [Checking data](#data-exists)
- [Getting data](#getting-information)

###Take Note!
Right now all of the information is saved to a single index on LocalStorage as a JSON object. The index of the information is the name of the game so be careful with saving information for multiple different games that have the same name.  


###Boot Sequence:
This plugin use's the games boot sequence to check to see if a this game has previously had information 'saved' in localStorage or not. If it has it will automatically retrieve that information, if it hasn't it will create the a new item in localStorage for this game. Note: The key in localStorage is based off of the games name so make sure they are always unique when having multiple instances of a game on a since website/page.


###Saving Information:

**Add the Information:** 
To save information using this plugin you first use the 'add' the information to the localstorage object (or the saveManager). 

When you add the information you have to provide a key for the information you are saving. This is so that when you try to access that information again you know what one you are wanting.

```
this.game.saveManager.add('key', 'data');
```

**Run the Save Method:**
Once the information has been added you then need to tell localStorage to 'save' the information. 

```
this.game.saveManager.save(); 

//Alternatively you can also pass `true` as the third argument to the `add` method which will tell the plugin to automatically execute the `save` method.
this.game.saveManager.add('key', 'data', true);
```

###Loading Information:

By default when this plugin is included into a game it will automatically get any information that it has previous saved, but at any time you can always get what is currently stored in localStorage by using the 'load' method.

```
this.game.saveManager.load();
```

Note: When you do load information any 'unsaved' information will be overriden/lost.

###Data Exists
To see if a value exists for a particular key you can execute the `exists` method. 

```
if( this.game.saveManager.exists( 'key' ) ) {
    //Get you data here...
} else {
    //Data doesn't exist. Set a default value?
}
```

###Getting Information: 
If you want to retrieve some information from you have two options.

The first is to use the 'getData' method, in which you pass a key for the information you want to get. If no information was retrieve this method will return 'null'.

```
var data = this.game.saveManager.getData('key');
```

The second option is to access the 'data' property on the localStorage object which holds all of the information currently added. Note that this object is read only though.

```
var dataObj = this.game.saveManager.localStorage.data;
```
