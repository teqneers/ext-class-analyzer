# Ext Class Analyser
This tool can analyse ExtJS files. Therefor you need to install node on your system.
It contains a validation for Ext-Specific errors, but also a validation using JSHint.
In addition to that it will find dependencies between classes. Thereby it will create files in dot-notation.
After going through your workspace, you can create dependency-graphs using GraphViz.

## Configuration
Before you can use this tool, you have to set up your local configuration. To do this just copy the config.json.default and remove the 'default'-extension.
Afterwards you have to edit the entries and adjust them to your needs. See the next chapter for the meaning of the options.

### Module Options

#### JS File Seeker (jsFileSeeker)
Seeks for Javascript files in the declared project-folder.

##### projectFolder
Declare with absolute Path, where to find the workspace folder
 
##### skipPaths
An Array which contains strings. There you can specify folders which need to be skipped.
But be aware that in these folders are no files which contain classes you will use in your project.

#### Ext Class Seeker (extClassSeeker)
Seeks in the detected Files for Ext-Classes declarations. Those will be found if they are in the "Ext.define()" method.

##### extClassSeeker
An Array which contains strings of paths (RegExp). The Files which are in those folders will get a fast Run.
 This means that instantiations will be skipped, and just declarations like xtype or alias will be observed.
 Also JSHint will be skipped on these files.

#### Ext Error Seeker (errorSeeker)
This class will validate your Ext-Classes. It will show you the failures you made when using / requiring or instantiating a class,
which either not exists or is not mentioned in the "use/require" part.

##### showInfo
boolean whether you want to see the errors of type "Information" or not.
 
##### jsHintOptions
these are options for using JSHint. To configure this see [JSHint options](http://jshint.com/docs/options/)
 
##### globalVariables
Javascript Object with key vale pairs. The keys define which variables should be known as globals in the code.
 Globals, which are not mentioned here but used in your code, will show an error.
 The values are booleans which state whether the variable will get edited by your code.
 If you develop classes for the Namespace "XY" then you should add the key "XY" with value of true.
 "Ext" itself should be added as global but set to false.

#### Ext Class Dependencies (extClassDependencies)
This class will create the files in dot-notation to build the dependency-graph with the help of GraphViz.

##### namespaceColors
Javascript Object which contains the used namespaces as keys and the color you wish for it. You can either use color names, hsv data or rgb colors.

#### Ext Class Analyser (extClassAnalyser)
This class is the one which merges all modules together. To use all modules together you just need to trigger ext-class-analyser.js.

#####newDependencieRun
this boolean indicates if you want to make a new run. if false and the file specified in "saveDependenciePath" the tool will take the saved dependencies. In every other case it will scan the workspace a new time.

##### saveDependencies
this boolean indicates if you want to save the acquisition of your classes found in your workspace.
  
##### saveDependenciePath
specifies the path where to save the information of found classes if saveDependencies is true. If newRun is set to false and this file exists, the analyser will use this path to get information about the classes. 
This file needs a 'json' extension.
  
##### lookForErrors
to enable or disable the module "Ext Error Seeker"

##### saveErrors
this boolean indicates if you want to save the the errors found in your workspace in any file. If not they will be shown in console.

##### saveErrorsPath
specifies the path where to save the errors of found classes

## Usage
You can run this tool within your node giving one argument which indicates a folder or subfolder you want to see in the graphs.

If you save the dependencies the tool will run over the files in the workspace and exclude files which contain no ext classes. Otherwise the tool will use the saved class information. 
After the review of your workspace you can run the shell-script in the files folder, on condition that you have installed GraphViz on your system. If it succeeded you can now see the 
svg-files in the tmp-folder or you can run the index.php file to see all pictures in one file.