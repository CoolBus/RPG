/*
 * #GameWiki page
 */

var RPG = module.exports = {};
Object.merge(RPG,
    require("../pageBase.njs")
    );

RPG.pageGameWiki =  new Class({
    Extends : RPG.PageBaseClass,
    pageContents : {}, /*Object to hold all the contents of this page*/
    options : {

    },
    initialize : function(options) {
        this.parent(options);

        /**
	 * Default object that will be modified by each request.
	 * Take care when modifying the default pageContents as it is served to all users.
	 * Instead, clone the object for the current user and modify the clone.
	 */
        this.pageContents = {
            'h1#homeHeader' : {
                html : 'Game Wiki'
            }
        };
    },
    /**
     * Overrides onRequest
     */
    onRequest : function(request,response) {
        /**
	 * Clone the default pageContents for modification
	 */
        var clone = Object.clone(this.pageContents);

        /**
	 * Modify the Clone
	 */



        /**
	 * Finally Call the parent classes onRequest
	 * which wraps the contents in a page object
	 */
        response.onRequestComplete(response,this._onRequest(request,{
            title : 'Game Wiki',
            populates : 'pnlMainContent',
            requires : {
                //'css' : ['home.css'],
                'js' : ['/client/pages/GameWiki/GameWiki.js'],
                exports :'pageGameWiki'
            },
            pageContents : clone
        })
        );
    }
});