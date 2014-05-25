YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "LocalStorage",
        "SaveManager"
    ],
    "modules": [
        "Plugins",
        "SaveGame"
    ],
    "allModules": [
        {
            "displayName": "Plugins",
            "name": "Plugins"
        },
        {
            "displayName": "SaveGame",
            "name": "SaveGame",
            "description": "Is the section of the Plugins that holds the various ways that deal with the saving of information. \nThe area in the information is stored can be a varierty of places (e.t.c LocalStorage, on a Server)\nand as such when saving you have to go through the SaveManager first"
        }
    ]
} };
});