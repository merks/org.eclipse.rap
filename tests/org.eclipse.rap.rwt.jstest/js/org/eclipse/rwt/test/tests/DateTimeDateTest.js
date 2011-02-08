/*******************************************************************************
 * Copyright (c) 2011 EclipseSource and others. All rights reserved.
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   EclipseSource - initial API and implementation
 ******************************************************************************/
qx.Class.define( "org.eclipse.rwt.test.tests.DateTimeDateTest", {
  extend : qx.core.Object,

  construct : function() {
    this.base( arguments );
    this.testUtil = org.eclipse.rwt.test.fixture.TestUtil;
  },

  members : {

    testCreateDateTimeDate : function() {
      var dateTime = this._createDefaultDateTime();
      assertTrue( dateTime instanceof org.eclipse.swt.widgets.DateTimeDate );
      assertEquals( "datetime-date", dateTime.getAppearance() );
      dateTime.destroy();
    },

    testSendAllFieldsTogether : function() {
      var dateTime = this._createDefaultDateTime();
      dateTime.setDay( 10 );
      dateTime.setMonth( 10 );
      dateTime.setYear( 2010 );
      this.testUtil.clearRequestLog();
      dateTime._sendChanges();
      assertEquals( 0, this.testUtil.getRequestsSend() );
      var req = org.eclipse.swt.Request.getInstance();
      assertEquals( 10, req._parameters[ "w3.day" ] );
      assertEquals( 10, req._parameters[ "w3.month" ] );
      assertEquals( 2010, req._parameters[ "w3.year" ] );
    },

    //////////
    // Helpers

    _createDefaultDateTime : function() {
      var testUtil = org.eclipse.rwt.test.fixture.TestUtil;
      var style = "medium";
      var monthNames = [ "January",
                         "February",
                         "March",
                         "April",
                         "May",
                         "June",
                         "July",
                         "August",
                         "September",
                         "October",
                         "November",
                         "December",
                         "" ];
      var weekdayNames =  [ "",
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday" ];
      var weekdayShortNames = [ "",
                                "Sun",
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat" ];
      var dateSeparator = "/";
      var datePattern = "MDY";
      var dateTime = new org.eclipse.swt.widgets.DateTimeDate( style,
                                                               monthNames,
                                                               weekdayNames,
                                                               weekdayShortNames,
                                                               dateSeparator,
                                                               datePattern);
      var widgetManager = org.eclipse.swt.WidgetManager.getInstance();
      widgetManager.add( dateTime, "w3", true );
      dateTime.setSpace( 3, 115, 3, 20 );
      dateTime.addToDocument();
      testUtil.flush();
      return dateTime;
    }

  }

} );
