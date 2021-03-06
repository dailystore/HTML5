/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

//Provides default renderer for control sap.ui.table.DataTable
jQuery.sap.declare("sap.ui.table.DataTableRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.ui.table.TreeTableRenderer");

/**
 * @class DataTableRenderer
 * @static
 */
sap.ui.table.DataTableRenderer = sap.ui.core.Renderer.extend(sap.ui.table.TreeTableRenderer);
