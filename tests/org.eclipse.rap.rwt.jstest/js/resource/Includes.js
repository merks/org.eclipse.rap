/*******************************************************************************
 * Copyright (c) 2010, 2011 EclipseSource and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    EclipseSource - initial API and implementation
 ******************************************************************************/

( function() {

  var getURLParam = function( name ) {
    var result = null;
    var href = window.location.href;
    var hashes = href.slice( href.indexOf( "?" ) + 1).split( "&" );
    for( var i = 0; i < hashes.length; i++ ) {
      var hash = hashes[ i ].split( "=" );
      if( hash[ 0 ] === name ) {
        result = hash[ 1 ];
      }
    }
    return result;
  };

  qxsettings = {};
  qxsettings[ "qx.application" ] = "org.eclipse.rwt.test.Application";
  qxsettings[ "qx.minLogLevel" ] = 200;
  qxsettings[ "qx.logAppender" ] = "qx.log.appender.Native";
  qxsettings[ "qx.version" ] = "0.7.4 ";
  qxsettings[ "qx.isSource"] = true;
  qxsettings[ "qx.resourceUri" ] = "./js/resource";
  qxsettings[ "qx.resourceUri" ] = "../org.eclipse.rap.rwt.q07/js/resource";    
  qxsettings[ "qx.theme" ] = "org.eclipse.swt.theme.Default";
  qxvariants = {};
  qxvariants[ "qx.compatibility" ] = "off";
  qxvariants[ "qx.aspects" ] = "off";
  qxvariants[ "qx.debug" ] = getURLParam( "debug" ) === "off" ? "off" : "on";

  var clientClasses = [
    "debug-settings.js",
    "qx/core/Bootstrap.js",
    "qx/lang/Core.js",
    "qx/core/Setting.js",
    "qx/lang/Array.js",
    "qx/core/Variant.js",
    "org/eclipse/rwt/Client.js",
    "qx/lang/Object.js",
    "qx/Class.js",
    "qx/Mixin.js",
    "qx/core/MUserData.js",
    "qx/core/LegacyProperty.js",
    "qx/core/Property.js",
    "qx/lang/String.js",
    "qx/core/Object.js",
    "qx/lang/Function.js",
    "qx/bom/Viewport.js",
    "qx/Theme.js",
    "qx/core/Target.js",
    "qx/event/type/Event.js",
    "qx/event/type/DataEvent.js",
    "qx/event/type/ChangeEvent.js",
    "qx/client/Timer.js",
    "qx/html/String.js",
    "qx/dom/String.js",
    "qx/html/Entity.js",
    "qx/html/EventRegistration.js",
    "qx/core/Init.js",
    "qx/util/manager/MConnectedObject.js",
    "org/eclipse/rwt/HtmlUtil.js",
    "qx/ui/core/Widget.js",
    "org/eclipse/rwt/WidgetRenderAdapter.js",
    "qx/html/Dimension.js",
    "qx/html/Style.js",
    "qx/html/Scroll.js",
    "qx/html/StyleSheet.js",
    "qx/ui/core/Parent.js",
    "qx/event/type/FocusEvent.js",
    "org/eclipse/rwt/EventHandler.js",
    "qx/dom/Node.js",
    "org/eclipse/rwt/EventHandlerUtil.js",
    "qx/event/type/DomEvent.js",
    "qx/event/type/KeyEvent.js",
    "qx/event/type/MouseEvent.js",
    "qx/util/manager/Object.js",
    "qx/ui/embed/IframeManager.js",
    "qx/ui/layout/CanvasLayout.js",
    "qx/ui/layout/impl/LayoutImpl.js",
    "qx/lang/Number.js",
    "qx/ui/layout/impl/CanvasLayoutImpl.js",
    "qx/ui/core/ClientDocument.js",
    "qx/ui/basic/Terminator.js",
    "qx/ui/core/ClientDocumentBlocker.js",
    "qx/theme/manager/Appearance.js",
    "qx/theme/manager/Meta.js",
    "qx/util/manager/Value.js",
    "qx/theme/manager/Color.js",
    "qx/util/ColorUtil.js",
    "qx/ui/core/Border.js",
    "qx/theme/manager/Font.js",
    "qx/ui/core/Font.js",
    "qx/theme/manager/Icon.js",
    "qx/io/Alias.js",
    "qx/theme/manager/Widget.js",
    "qx/event/handler/FocusHandler.js",
    "qx/bom/element/Location.js",
    "qx/bom/element/Style.js",
    "qx/bom/element/BoxSizing.js",
    "qx/bom/Document.js",
    "qx/bom/element/Overflow.js",
    "qx/io/image/Manager.js",
    "qx/html/Offset.js",
    "qx/html/ScrollIntoView.js",
    "qx/ui/layout/BoxLayout.js",
    "qx/ui/layout/impl/VerticalBoxLayoutImpl.js",
    "qx/util/Validation.js",
    "qx/ui/layout/impl/HorizontalBoxLayoutImpl.js",
    "qx/ui/basic/Atom.js",
    "qx/ui/basic/Label.js",
    "qx/ui/basic/Image.js",
    "qx/io/image/PreloaderManager.js",
    "qx/io/image/Preloader.js",
    "qx/ui/form/ListItem.js",
    "qx/constant/Layout.js",
    "qx/constant/Style.js",
    "qx/io/remote/AbstractRemoteTransport.js",
    "qx/ui/layout/HorizontalBoxLayout.js",
    "qx/ui/form/Spinner.js",
    "qx/ui/form/TextField.js",
    "qx/ui/layout/VerticalBoxLayout.js",
    "qx/ui/form/Button.js",
    "qx/util/range/Range.js",
    "qx/ui/pageview/AbstractPageView.js",
    "qx/ui/pageview/tabview/TabView.js",
    "qx/ui/pageview/AbstractBar.js",
    "qx/ui/selection/RadioManager.js",
    "qx/ui/pageview/tabview/Bar.js",
    "qx/ui/pageview/AbstractPane.js",
    "qx/ui/pageview/tabview/Pane.js",
    "qx/ui/popup/Popup.js",
    "qx/ui/popup/PopupManager.js",
    "qx/ui/selection/SelectionManager.js",
    "qx/ui/selection/Selection.js",
    "org/eclipse/swt/widgets/AbstractSlider.js",    
    "org/eclipse/rwt/widgets/ScrollBar.js",
    "qx/application/Gui.js",
    "qx/io/image/PreloaderSystem.js",
    "qx/io/remote/RequestQueue.js",
    "qx/io/remote/Exchange.js",
    "qx/io/remote/Response.js",
    "qx/util/Mime.js",
    "qx/io/remote/XmlHttpTransport.js",
    "qx/net/HttpRequest.js",
    "qx/html/Iframe.js",
    "qx/net/Http.js",
    "qx/io/remote/Request.js",
    "qx/ui/popup/PopupAtom.js",
    "qx/ui/popup/ToolTip.js",
    "qx/ui/popup/ToolTipManager.js",
    "qx/html/Window.js",
    "qx/client/History.js",
    "qx/event/handler/DragAndDropHandler.js",
    "qx/event/type/DragEvent.js",
    "qx/ui/embed/HtmlEmbed.js",
    "qx/ui/embed/Iframe.js",
    "qx/ui/pageview/AbstractButton.js",
    "qx/ui/groupbox/GroupBox.js",
    "qx/ui/resizer/MResizable.js",
    "qx/ui/resizer/ResizablePopup.js",
    "qx/ui/window/Window.js",
    "qx/ui/basic/HorizontalSpacer.js",
    "qx/ui/window/Manager.js",
    "qx/ui/menu/Separator.js",
    "qx/ui/pageview/AbstractPage.js",
    "qx/ui/pageview/tabview/Page.js",
    "qx/ui/pageview/tabview/Button.js",
    "org/eclipse/swt/LabelUtil.js",
    "org/eclipse/rwt/widgets/TreeRow.js",
    "org/eclipse/swt/Application.js",
    "org/eclipse/rwt/AsyncKeyEventUtil.js",
    "org/eclipse/swt/Request.js",
    "org/eclipse/swt/EventUtil.js",
    "org/eclipse/swt/WidgetManager.js",
    "org/eclipse/rwt/FadeAnimationMixin.js",
    "org/eclipse/rwt/AnimationRenderer.js",
    "org/eclipse/rwt/Animation.js",
    "org/eclipse/rwt/widgets/WidgetToolTip.js",
    "org/eclipse/rwt/RoundedBorder.js",
    "org/eclipse/rwt/SyncKeyEventUtil.js",
    "org/eclipse/rwt/GraphicsMixin.js",
    "org/eclipse/rwt/GraphicsUtil.js",
    "org/eclipse/rwt/VML.js",
    "org/eclipse/rwt/SVG.js",
    "org/eclipse/swt/WidgetUtil.js",
    "org/eclipse/swt/theme/ThemeStore.js",
    "org/eclipse/rwt/widgets/MultiCellWidget.js",
    "org/eclipse/rwt/DomEventPatch.js",
    "org/eclipse/rwt/widgets/Menu.js",
    "org/eclipse/rwt/MenuManager.js",
    "org/eclipse/rwt/widgets/MenuItem.js",
    "org/eclipse/rwt/RadioButtonUtil.js",
    "org/eclipse/rwt/widgets/MenuBar.js",
    "org/eclipse/rwt/TableDNDFeedback.js",
    "org/eclipse/rwt/DNDSupport.js",
    "org/eclipse/swt/widgets/TableRow.js",
    "org/eclipse/swt/theme/ThemeValues.js",
    "org/eclipse/rwt/widgets/Tree.js",
    "org/eclipse/rwt/widgets/TreeItem.js",
    "org/eclipse/rwt/TreeDNDFeedback.js",
    "org/eclipse/swt/widgets/Table.js",
    "org/eclipse/swt/widgets/TableItem.js",
    "org/eclipse/swt/widgets/TableCellToolTip.js",
    "org/eclipse/swt/widgets/TableColumn.js",
    "org/eclipse/swt/browser/Browser.js",
    "org/eclipse/rwt/widgets/ExternalBrowser.js",
    "org/eclipse/swt/FontSizeCalculation.js",
    "org/eclipse/rwt/widgets/BasicButton.js",
    "org/eclipse/rwt/widgets/ToolItem.js",
    "org/eclipse/swt/widgets/Group.js",
    "org/eclipse/swt/widgets/Shell.js",
    "org/eclipse/swt/widgets/ProgressBar.js",
    "org/eclipse/swt/widgets/Link.js",
    "org/eclipse/swt/widgets/Scrollable.js",
    "org/eclipse/swt/custom/ScrolledComposite.js",
    "org/eclipse/rwt/widgets/ToolBar.js",
    "org/eclipse/swt/TextUtil.js",
    "org/eclipse/swt/widgets/Scale.js",
    "org/eclipse/rwt/widgets/ToolSeparator.js",
    "org/eclipse/swt/theme/BorderDefinitions.js",
    "org/eclipse/rwt/widgets/BasicList.js",
    "org/eclipse/swt/widgets/Combo.js",
    "org/eclipse/rwt/FocusIndicator.js",
    "org/eclipse/swt/CLabelUtil.js",
    "org/eclipse/swt/graphics/GC.js",
    "org/eclipse/rwt/VMLCanvas.js",
    "org/eclipse/swt/widgets/Composite.js",
    "org/eclipse/swt/widgets/Sash.js",
    "org/eclipse/swt/widgets/Canvas.js",
    "org/eclipse/swt/widgets/List.js",
    "org/eclipse/swt/TabUtil.js",
    "org/eclipse/swt/widgets/DateTimeCalendar.js",
    "org/eclipse/swt/widgets/Calendar.js",
    "org/eclipse/swt/widgets/CoolItem.js",
    "org/eclipse/rwt/widgets/Button.js",
    "org/eclipse/rwt/widgets/FileUpload.js",
    "org/eclipse/swt/widgets/DateTimeTime.js",
    "org/eclipse/swt/widgets/Slider.js",
    "org/eclipse/swt/widgets/Spinner.js",
    "org/eclipse/swt/widgets/DateTimeDate.js",
    "org/eclipse/swt/custom/CTabItem.js",
    "org/eclipse/swt/custom/CTabFolder.js",
    "org/eclipse/swt/widgets/ExpandItem.js",
    "org/eclipse/swt/widgets/ExpandBar.js",
    "org/eclipse/rwt/widgets/Text.js",
    "org/eclipse/rwt/KeyEventUtil.js",
    "org/eclipse/swt/widgets/Separator.js",
    "org/eclipse/swt/theme/AppearancesBase.js",
    "org/eclipse/rwt/widgets/ControlDecorator.js",
    "org/eclipse/rwt/MobileWebkitSupport.js"
  ];
  
  var testRunnerClasses = [
    "org/eclipse/rwt/test/fixture/RAPRequestPatch.js",
    "org/eclipse/rwt/test/fixture/DummyRequest.js",
    "org/eclipse/rwt/test/fixture/RAPServer.js",
    "org/eclipse/rwt/test/fixture/AppSimulator.js",
    "org/eclipse/rwt/test/Presenter.js",
    "org/eclipse/rwt/test/TestRunner.js",
    "org/eclipse/rwt/test/fixture/TestUtil.js",
    "org/eclipse/rwt/test/Asserts.js",
    "org/eclipse/rwt/test/Application.js",
    "resource/RAPThemeSupport.js"
  ];

  var include = function( src ) {
    var output = [];
    output.push( "<script src=\"" );
    output.push( src );
    output.push( "\" type=\"text/javascript\"></script>" );
    document.write( output.join( "" ) );
  };
  
  for( var i = 0; i < clientClasses.length; i++ ) {
    include( "../org.eclipse.rap.rwt.q07/js/" + clientClasses[ i ] );
  }

  for( var i = 0; i < testRunnerClasses.length; i++ ) {
    include( "../org.eclipse.rap.rwt.q07.jstest/js/" + testRunnerClasses[ i ] );
  }

} )();