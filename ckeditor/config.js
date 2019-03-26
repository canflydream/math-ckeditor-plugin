/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
    config.language = 'zh-cn';
    config.toolbar_MyBasic = [
        [ 'Bold', 'Italic'],
        ['FontSize','Image', 'helloworld']
    ];

    config.extraPlugins += (config.extraPlugins ? ',helloworld' : 'helloworld');
};
