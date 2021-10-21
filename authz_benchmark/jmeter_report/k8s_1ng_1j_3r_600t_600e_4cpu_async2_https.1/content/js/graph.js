/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 10390.0, "series": [{"data": [[0.0, 3.0], [0.1, 5.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 7.0], [1.0, 7.0], [1.1, 7.0], [1.2, 7.0], [1.3, 7.0], [1.4, 7.0], [1.5, 7.0], [1.6, 7.0], [1.7, 7.0], [1.8, 7.0], [1.9, 7.0], [2.0, 7.0], [2.1, 7.0], [2.2, 7.0], [2.3, 8.0], [2.4, 8.0], [2.5, 8.0], [2.6, 8.0], [2.7, 8.0], [2.8, 8.0], [2.9, 8.0], [3.0, 8.0], [3.1, 8.0], [3.2, 8.0], [3.3, 8.0], [3.4, 8.0], [3.5, 8.0], [3.6, 8.0], [3.7, 8.0], [3.8, 8.0], [3.9, 8.0], [4.0, 8.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 9.0], [4.7, 9.0], [4.8, 9.0], [4.9, 9.0], [5.0, 9.0], [5.1, 9.0], [5.2, 9.0], [5.3, 9.0], [5.4, 9.0], [5.5, 9.0], [5.6, 9.0], [5.7, 9.0], [5.8, 9.0], [5.9, 9.0], [6.0, 9.0], [6.1, 9.0], [6.2, 9.0], [6.3, 9.0], [6.4, 9.0], [6.5, 9.0], [6.6, 9.0], [6.7, 9.0], [6.8, 9.0], [6.9, 9.0], [7.0, 9.0], [7.1, 9.0], [7.2, 9.0], [7.3, 9.0], [7.4, 9.0], [7.5, 10.0], [7.6, 10.0], [7.7, 10.0], [7.8, 10.0], [7.9, 10.0], [8.0, 10.0], [8.1, 10.0], [8.2, 10.0], [8.3, 10.0], [8.4, 10.0], [8.5, 10.0], [8.6, 10.0], [8.7, 10.0], [8.8, 10.0], [8.9, 10.0], [9.0, 10.0], [9.1, 10.0], [9.2, 10.0], [9.3, 10.0], [9.4, 10.0], [9.5, 10.0], [9.6, 10.0], [9.7, 10.0], [9.8, 10.0], [9.9, 10.0], [10.0, 10.0], [10.1, 10.0], [10.2, 10.0], [10.3, 10.0], [10.4, 10.0], [10.5, 11.0], [10.6, 11.0], [10.7, 11.0], [10.8, 11.0], [10.9, 11.0], [11.0, 11.0], [11.1, 11.0], [11.2, 11.0], [11.3, 11.0], [11.4, 11.0], [11.5, 11.0], [11.6, 11.0], [11.7, 11.0], [11.8, 11.0], [11.9, 11.0], [12.0, 11.0], [12.1, 11.0], [12.2, 11.0], [12.3, 11.0], [12.4, 11.0], [12.5, 11.0], [12.6, 11.0], [12.7, 11.0], [12.8, 11.0], [12.9, 11.0], [13.0, 11.0], [13.1, 11.0], [13.2, 11.0], [13.3, 11.0], [13.4, 11.0], [13.5, 11.0], [13.6, 11.0], [13.7, 11.0], [13.8, 12.0], [13.9, 12.0], [14.0, 12.0], [14.1, 12.0], [14.2, 12.0], [14.3, 12.0], [14.4, 12.0], [14.5, 12.0], [14.6, 12.0], [14.7, 12.0], [14.8, 12.0], [14.9, 12.0], [15.0, 12.0], [15.1, 12.0], [15.2, 12.0], [15.3, 12.0], [15.4, 12.0], [15.5, 12.0], [15.6, 12.0], [15.7, 12.0], [15.8, 12.0], [15.9, 12.0], [16.0, 12.0], [16.1, 12.0], [16.2, 12.0], [16.3, 12.0], [16.4, 12.0], [16.5, 12.0], [16.6, 12.0], [16.7, 12.0], [16.8, 12.0], [16.9, 12.0], [17.0, 12.0], [17.1, 12.0], [17.2, 13.0], [17.3, 13.0], [17.4, 13.0], [17.5, 13.0], [17.6, 13.0], [17.7, 13.0], [17.8, 13.0], [17.9, 13.0], [18.0, 13.0], [18.1, 13.0], [18.2, 13.0], [18.3, 13.0], [18.4, 13.0], [18.5, 13.0], [18.6, 13.0], [18.7, 13.0], [18.8, 13.0], [18.9, 13.0], [19.0, 13.0], [19.1, 13.0], [19.2, 13.0], [19.3, 13.0], [19.4, 13.0], [19.5, 13.0], [19.6, 13.0], [19.7, 13.0], [19.8, 13.0], [19.9, 13.0], [20.0, 13.0], [20.1, 13.0], [20.2, 13.0], [20.3, 13.0], [20.4, 13.0], [20.5, 13.0], [20.6, 14.0], [20.7, 14.0], [20.8, 14.0], [20.9, 14.0], [21.0, 14.0], [21.1, 14.0], [21.2, 14.0], [21.3, 14.0], [21.4, 14.0], [21.5, 14.0], [21.6, 14.0], [21.7, 14.0], [21.8, 14.0], [21.9, 14.0], [22.0, 14.0], [22.1, 14.0], [22.2, 14.0], [22.3, 14.0], [22.4, 14.0], [22.5, 14.0], [22.6, 14.0], [22.7, 14.0], [22.8, 14.0], [22.9, 14.0], [23.0, 14.0], [23.1, 14.0], [23.2, 14.0], [23.3, 14.0], [23.4, 14.0], [23.5, 14.0], [23.6, 14.0], [23.7, 14.0], [23.8, 14.0], [23.9, 14.0], [24.0, 14.0], [24.1, 15.0], [24.2, 15.0], [24.3, 15.0], [24.4, 15.0], [24.5, 15.0], [24.6, 15.0], [24.7, 15.0], [24.8, 15.0], [24.9, 15.0], [25.0, 15.0], [25.1, 15.0], [25.2, 15.0], [25.3, 15.0], [25.4, 15.0], [25.5, 15.0], [25.6, 15.0], [25.7, 15.0], [25.8, 15.0], [25.9, 15.0], [26.0, 15.0], [26.1, 15.0], [26.2, 15.0], [26.3, 15.0], [26.4, 15.0], [26.5, 15.0], [26.6, 15.0], [26.7, 15.0], [26.8, 15.0], [26.9, 15.0], [27.0, 15.0], [27.1, 15.0], [27.2, 15.0], [27.3, 15.0], [27.4, 15.0], [27.5, 15.0], [27.6, 15.0], [27.7, 16.0], [27.8, 16.0], [27.9, 16.0], [28.0, 16.0], [28.1, 16.0], [28.2, 16.0], [28.3, 16.0], [28.4, 16.0], [28.5, 16.0], [28.6, 16.0], [28.7, 16.0], [28.8, 16.0], [28.9, 16.0], [29.0, 16.0], [29.1, 16.0], [29.2, 16.0], [29.3, 16.0], [29.4, 16.0], [29.5, 16.0], [29.6, 16.0], [29.7, 16.0], [29.8, 16.0], [29.9, 16.0], [30.0, 16.0], [30.1, 16.0], [30.2, 16.0], [30.3, 16.0], [30.4, 16.0], [30.5, 16.0], [30.6, 16.0], [30.7, 16.0], [30.8, 16.0], [30.9, 16.0], [31.0, 16.0], [31.1, 16.0], [31.2, 16.0], [31.3, 16.0], [31.4, 16.0], [31.5, 17.0], [31.6, 17.0], [31.7, 17.0], [31.8, 17.0], [31.9, 17.0], [32.0, 17.0], [32.1, 17.0], [32.2, 17.0], [32.3, 17.0], [32.4, 17.0], [32.5, 17.0], [32.6, 17.0], [32.7, 17.0], [32.8, 17.0], [32.9, 17.0], [33.0, 17.0], [33.1, 17.0], [33.2, 17.0], [33.3, 17.0], [33.4, 17.0], [33.5, 17.0], [33.6, 17.0], [33.7, 17.0], [33.8, 17.0], [33.9, 17.0], [34.0, 17.0], [34.1, 17.0], [34.2, 17.0], [34.3, 17.0], [34.4, 17.0], [34.5, 17.0], [34.6, 17.0], [34.7, 17.0], [34.8, 17.0], [34.9, 17.0], [35.0, 17.0], [35.1, 17.0], [35.2, 17.0], [35.3, 17.0], [35.4, 18.0], [35.5, 18.0], [35.6, 18.0], [35.7, 18.0], [35.8, 18.0], [35.9, 18.0], [36.0, 18.0], [36.1, 18.0], [36.2, 18.0], [36.3, 18.0], [36.4, 18.0], [36.5, 18.0], [36.6, 18.0], [36.7, 18.0], [36.8, 18.0], [36.9, 18.0], [37.0, 18.0], [37.1, 18.0], [37.2, 18.0], [37.3, 18.0], [37.4, 18.0], [37.5, 18.0], [37.6, 18.0], [37.7, 18.0], [37.8, 18.0], [37.9, 18.0], [38.0, 18.0], [38.1, 18.0], [38.2, 18.0], [38.3, 18.0], [38.4, 18.0], [38.5, 18.0], [38.6, 18.0], [38.7, 18.0], [38.8, 18.0], [38.9, 18.0], [39.0, 18.0], [39.1, 18.0], [39.2, 18.0], [39.3, 19.0], [39.4, 19.0], [39.5, 19.0], [39.6, 19.0], [39.7, 19.0], [39.8, 19.0], [39.9, 19.0], [40.0, 19.0], [40.1, 19.0], [40.2, 19.0], [40.3, 19.0], [40.4, 19.0], [40.5, 19.0], [40.6, 19.0], [40.7, 19.0], [40.8, 19.0], [40.9, 19.0], [41.0, 19.0], [41.1, 19.0], [41.2, 19.0], [41.3, 19.0], [41.4, 19.0], [41.5, 19.0], [41.6, 19.0], [41.7, 19.0], [41.8, 19.0], [41.9, 19.0], [42.0, 19.0], [42.1, 19.0], [42.2, 19.0], [42.3, 19.0], [42.4, 19.0], [42.5, 19.0], [42.6, 19.0], [42.7, 19.0], [42.8, 19.0], [42.9, 19.0], [43.0, 19.0], [43.1, 19.0], [43.2, 19.0], [43.3, 19.0], [43.4, 20.0], [43.5, 20.0], [43.6, 20.0], [43.7, 20.0], [43.8, 20.0], [43.9, 20.0], [44.0, 20.0], [44.1, 20.0], [44.2, 20.0], [44.3, 20.0], [44.4, 20.0], [44.5, 20.0], [44.6, 20.0], [44.7, 20.0], [44.8, 20.0], [44.9, 20.0], [45.0, 20.0], [45.1, 20.0], [45.2, 20.0], [45.3, 20.0], [45.4, 20.0], [45.5, 20.0], [45.6, 20.0], [45.7, 20.0], [45.8, 20.0], [45.9, 20.0], [46.0, 20.0], [46.1, 20.0], [46.2, 20.0], [46.3, 20.0], [46.4, 20.0], [46.5, 20.0], [46.6, 20.0], [46.7, 20.0], [46.8, 20.0], [46.9, 20.0], [47.0, 20.0], [47.1, 20.0], [47.2, 20.0], [47.3, 20.0], [47.4, 20.0], [47.5, 20.0], [47.6, 21.0], [47.7, 21.0], [47.8, 21.0], [47.9, 21.0], [48.0, 21.0], [48.1, 21.0], [48.2, 21.0], [48.3, 21.0], [48.4, 21.0], [48.5, 21.0], [48.6, 21.0], [48.7, 21.0], [48.8, 21.0], [48.9, 21.0], [49.0, 21.0], [49.1, 21.0], [49.2, 21.0], [49.3, 21.0], [49.4, 21.0], [49.5, 21.0], [49.6, 21.0], [49.7, 21.0], [49.8, 21.0], [49.9, 21.0], [50.0, 21.0], [50.1, 21.0], [50.2, 21.0], [50.3, 21.0], [50.4, 21.0], [50.5, 21.0], [50.6, 21.0], [50.7, 21.0], [50.8, 21.0], [50.9, 21.0], [51.0, 21.0], [51.1, 21.0], [51.2, 21.0], [51.3, 21.0], [51.4, 21.0], [51.5, 21.0], [51.6, 21.0], [51.7, 22.0], [51.8, 22.0], [51.9, 22.0], [52.0, 22.0], [52.1, 22.0], [52.2, 22.0], [52.3, 22.0], [52.4, 22.0], [52.5, 22.0], [52.6, 22.0], [52.7, 22.0], [52.8, 22.0], [52.9, 22.0], [53.0, 22.0], [53.1, 22.0], [53.2, 22.0], [53.3, 22.0], [53.4, 22.0], [53.5, 22.0], [53.6, 22.0], [53.7, 22.0], [53.8, 22.0], [53.9, 22.0], [54.0, 22.0], [54.1, 22.0], [54.2, 22.0], [54.3, 22.0], [54.4, 22.0], [54.5, 22.0], [54.6, 22.0], [54.7, 22.0], [54.8, 22.0], [54.9, 22.0], [55.0, 22.0], [55.1, 22.0], [55.2, 22.0], [55.3, 22.0], [55.4, 22.0], [55.5, 22.0], [55.6, 22.0], [55.7, 23.0], [55.8, 23.0], [55.9, 23.0], [56.0, 23.0], [56.1, 23.0], [56.2, 23.0], [56.3, 23.0], [56.4, 23.0], [56.5, 23.0], [56.6, 23.0], [56.7, 23.0], [56.8, 23.0], [56.9, 23.0], [57.0, 23.0], [57.1, 23.0], [57.2, 23.0], [57.3, 23.0], [57.4, 23.0], [57.5, 23.0], [57.6, 23.0], [57.7, 23.0], [57.8, 23.0], [57.9, 23.0], [58.0, 23.0], [58.1, 23.0], [58.2, 23.0], [58.3, 23.0], [58.4, 23.0], [58.5, 23.0], [58.6, 23.0], [58.7, 23.0], [58.8, 23.0], [58.9, 23.0], [59.0, 23.0], [59.1, 23.0], [59.2, 23.0], [59.3, 23.0], [59.4, 23.0], [59.5, 23.0], [59.6, 24.0], [59.7, 24.0], [59.8, 24.0], [59.9, 24.0], [60.0, 24.0], [60.1, 24.0], [60.2, 24.0], [60.3, 24.0], [60.4, 24.0], [60.5, 24.0], [60.6, 24.0], [60.7, 24.0], [60.8, 24.0], [60.9, 24.0], [61.0, 24.0], [61.1, 24.0], [61.2, 24.0], [61.3, 24.0], [61.4, 24.0], [61.5, 24.0], [61.6, 24.0], [61.7, 24.0], [61.8, 24.0], [61.9, 24.0], [62.0, 24.0], [62.1, 24.0], [62.2, 24.0], [62.3, 24.0], [62.4, 24.0], [62.5, 24.0], [62.6, 24.0], [62.7, 24.0], [62.8, 24.0], [62.9, 24.0], [63.0, 24.0], [63.1, 24.0], [63.2, 24.0], [63.3, 25.0], [63.4, 25.0], [63.5, 25.0], [63.6, 25.0], [63.7, 25.0], [63.8, 25.0], [63.9, 25.0], [64.0, 25.0], [64.1, 25.0], [64.2, 25.0], [64.3, 25.0], [64.4, 25.0], [64.5, 25.0], [64.6, 25.0], [64.7, 25.0], [64.8, 25.0], [64.9, 25.0], [65.0, 25.0], [65.1, 25.0], [65.2, 25.0], [65.3, 25.0], [65.4, 25.0], [65.5, 25.0], [65.6, 25.0], [65.7, 25.0], [65.8, 25.0], [65.9, 25.0], [66.0, 25.0], [66.1, 25.0], [66.2, 25.0], [66.3, 25.0], [66.4, 25.0], [66.5, 25.0], [66.6, 25.0], [66.7, 26.0], [66.8, 26.0], [66.9, 26.0], [67.0, 26.0], [67.1, 26.0], [67.2, 26.0], [67.3, 26.0], [67.4, 26.0], [67.5, 26.0], [67.6, 26.0], [67.7, 26.0], [67.8, 26.0], [67.9, 26.0], [68.0, 26.0], [68.1, 26.0], [68.2, 26.0], [68.3, 26.0], [68.4, 26.0], [68.5, 26.0], [68.6, 26.0], [68.7, 26.0], [68.8, 26.0], [68.9, 26.0], [69.0, 26.0], [69.1, 26.0], [69.2, 26.0], [69.3, 26.0], [69.4, 26.0], [69.5, 26.0], [69.6, 26.0], [69.7, 26.0], [69.8, 26.0], [69.9, 27.0], [70.0, 27.0], [70.1, 27.0], [70.2, 27.0], [70.3, 27.0], [70.4, 27.0], [70.5, 27.0], [70.6, 27.0], [70.7, 27.0], [70.8, 27.0], [70.9, 27.0], [71.0, 27.0], [71.1, 27.0], [71.2, 27.0], [71.3, 27.0], [71.4, 27.0], [71.5, 27.0], [71.6, 27.0], [71.7, 27.0], [71.8, 27.0], [71.9, 27.0], [72.0, 27.0], [72.1, 27.0], [72.2, 27.0], [72.3, 27.0], [72.4, 27.0], [72.5, 27.0], [72.6, 27.0], [72.7, 28.0], [72.8, 28.0], [72.9, 28.0], [73.0, 28.0], [73.1, 28.0], [73.2, 28.0], [73.3, 28.0], [73.4, 28.0], [73.5, 28.0], [73.6, 28.0], [73.7, 28.0], [73.8, 28.0], [73.9, 28.0], [74.0, 28.0], [74.1, 28.0], [74.2, 28.0], [74.3, 28.0], [74.4, 28.0], [74.5, 28.0], [74.6, 28.0], [74.7, 28.0], [74.8, 28.0], [74.9, 28.0], [75.0, 28.0], [75.1, 29.0], [75.2, 29.0], [75.3, 29.0], [75.4, 29.0], [75.5, 29.0], [75.6, 29.0], [75.7, 29.0], [75.8, 29.0], [75.9, 29.0], [76.0, 29.0], [76.1, 29.0], [76.2, 29.0], [76.3, 29.0], [76.4, 29.0], [76.5, 29.0], [76.6, 29.0], [76.7, 29.0], [76.8, 29.0], [76.9, 29.0], [77.0, 29.0], [77.1, 29.0], [77.2, 29.0], [77.3, 30.0], [77.4, 30.0], [77.5, 30.0], [77.6, 30.0], [77.7, 30.0], [77.8, 30.0], [77.9, 30.0], [78.0, 30.0], [78.1, 30.0], [78.2, 30.0], [78.3, 30.0], [78.4, 30.0], [78.5, 30.0], [78.6, 30.0], [78.7, 30.0], [78.8, 30.0], [78.9, 30.0], [79.0, 31.0], [79.1, 31.0], [79.2, 31.0], [79.3, 31.0], [79.4, 31.0], [79.5, 31.0], [79.6, 31.0], [79.7, 31.0], [79.8, 31.0], [79.9, 31.0], [80.0, 31.0], [80.1, 31.0], [80.2, 31.0], [80.3, 31.0], [80.4, 31.0], [80.5, 32.0], [80.6, 32.0], [80.7, 32.0], [80.8, 32.0], [80.9, 32.0], [81.0, 32.0], [81.1, 32.0], [81.2, 32.0], [81.3, 32.0], [81.4, 32.0], [81.5, 32.0], [81.6, 32.0], [81.7, 32.0], [81.8, 33.0], [81.9, 33.0], [82.0, 33.0], [82.1, 33.0], [82.2, 33.0], [82.3, 33.0], [82.4, 33.0], [82.5, 33.0], [82.6, 33.0], [82.7, 33.0], [82.8, 34.0], [82.9, 34.0], [83.0, 34.0], [83.1, 34.0], [83.2, 34.0], [83.3, 34.0], [83.4, 34.0], [83.5, 35.0], [83.6, 35.0], [83.7, 35.0], [83.8, 35.0], [83.9, 35.0], [84.0, 35.0], [84.1, 36.0], [84.2, 36.0], [84.3, 36.0], [84.4, 36.0], [84.5, 37.0], [84.6, 37.0], [84.7, 37.0], [84.8, 38.0], [84.9, 38.0], [85.0, 38.0], [85.1, 39.0], [85.2, 39.0], [85.3, 40.0], [85.4, 41.0], [85.5, 42.0], [85.6, 43.0], [85.7, 44.0], [85.8, 45.0], [85.9, 46.0], [86.0, 47.0], [86.1, 49.0], [86.2, 50.0], [86.3, 52.0], [86.4, 54.0], [86.5, 56.0], [86.6, 57.0], [86.7, 59.0], [86.8, 61.0], [86.9, 63.0], [87.0, 65.0], [87.1, 67.0], [87.2, 69.0], [87.3, 71.0], [87.4, 73.0], [87.5, 75.0], [87.6, 77.0], [87.7, 79.0], [87.8, 81.0], [87.9, 83.0], [88.0, 85.0], [88.1, 87.0], [88.2, 89.0], [88.3, 90.0], [88.4, 92.0], [88.5, 94.0], [88.6, 95.0], [88.7, 97.0], [88.8, 99.0], [88.9, 100.0], [89.0, 102.0], [89.1, 103.0], [89.2, 105.0], [89.3, 106.0], [89.4, 108.0], [89.5, 109.0], [89.6, 110.0], [89.7, 112.0], [89.8, 113.0], [89.9, 114.0], [90.0, 116.0], [90.1, 117.0], [90.2, 118.0], [90.3, 120.0], [90.4, 121.0], [90.5, 122.0], [90.6, 123.0], [90.7, 125.0], [90.8, 126.0], [90.9, 127.0], [91.0, 128.0], [91.1, 129.0], [91.2, 130.0], [91.3, 131.0], [91.4, 132.0], [91.5, 134.0], [91.6, 135.0], [91.7, 136.0], [91.8, 137.0], [91.9, 138.0], [92.0, 139.0], [92.1, 140.0], [92.2, 141.0], [92.3, 142.0], [92.4, 143.0], [92.5, 145.0], [92.6, 146.0], [92.7, 147.0], [92.8, 148.0], [92.9, 150.0], [93.0, 151.0], [93.1, 152.0], [93.2, 153.0], [93.3, 154.0], [93.4, 156.0], [93.5, 157.0], [93.6, 158.0], [93.7, 159.0], [93.8, 160.0], [93.9, 161.0], [94.0, 162.0], [94.1, 163.0], [94.2, 164.0], [94.3, 166.0], [94.4, 167.0], [94.5, 168.0], [94.6, 169.0], [94.7, 170.0], [94.8, 171.0], [94.9, 172.0], [95.0, 173.0], [95.1, 174.0], [95.2, 175.0], [95.3, 177.0], [95.4, 178.0], [95.5, 179.0], [95.6, 180.0], [95.7, 181.0], [95.8, 182.0], [95.9, 183.0], [96.0, 185.0], [96.1, 186.0], [96.2, 187.0], [96.3, 188.0], [96.4, 189.0], [96.5, 190.0], [96.6, 192.0], [96.7, 193.0], [96.8, 194.0], [96.9, 195.0], [97.0, 197.0], [97.1, 198.0], [97.2, 200.0], [97.3, 202.0], [97.4, 203.0], [97.5, 205.0], [97.6, 207.0], [97.7, 208.0], [97.8, 210.0], [97.9, 212.0], [98.0, 213.0], [98.1, 215.0], [98.2, 217.0], [98.3, 219.0], [98.4, 221.0], [98.5, 224.0], [98.6, 226.0], [98.7, 228.0], [98.8, 230.0], [98.9, 233.0], [99.0, 236.0], [99.1, 239.0], [99.2, 243.0], [99.3, 247.0], [99.4, 251.0], [99.5, 257.0], [99.6, 264.0], [99.7, 277.0], [99.8, 300.0], [99.9, 352.0], [100.0, 10390.0]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 795613.0, "series": [{"data": [[0.0, 795613.0], [600.0, 1.0], [1300.0, 1.0], [1700.0, 4.0], [1800.0, 18.0], [1900.0, 11.0], [2000.0, 13.0], [2100.0, 13.0], [2300.0, 9.0], [2200.0, 9.0], [2400.0, 3.0], [2500.0, 1.0], [2700.0, 2.0], [3300.0, 1.0], [3200.0, 1.0], [3700.0, 1.0], [3900.0, 1.0], [5200.0, 1.0], [6000.0, 2.0], [6100.0, 1.0], [6300.0, 5.0], [6200.0, 1.0], [6400.0, 2.0], [6600.0, 7.0], [6500.0, 4.0], [6900.0, 3.0], [6800.0, 1.0], [6700.0, 3.0], [7100.0, 6.0], [7000.0, 3.0], [7400.0, 2.0], [7200.0, 3.0], [7300.0, 4.0], [7600.0, 2.0], [7500.0, 4.0], [7800.0, 2.0], [7700.0, 2.0], [7900.0, 7.0], [8000.0, 2.0], [8100.0, 2.0], [8200.0, 7.0], [8300.0, 4.0], [8600.0, 2.0], [8400.0, 4.0], [8500.0, 2.0], [8700.0, 1.0], [9100.0, 11.0], [9200.0, 13.0], [8800.0, 4.0], [8900.0, 2.0], [9000.0, 1.0], [9600.0, 35.0], [9700.0, 56.0], [9400.0, 40.0], [9500.0, 32.0], [9300.0, 13.0], [9800.0, 43.0], [9900.0, 43.0], [10000.0, 44.0], [10100.0, 32.0], [10200.0, 39.0], [10300.0, 15.0], [100.0, 74365.0], [200.0, 23542.0], [300.0, 1142.0], [400.0, 65.0], [500.0, 7.0]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 894727.0, "series": [{"data": [[0.0, 894727.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 9.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 599.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 535.0223410835791, "minX": 1.63357062E12, "maxY": 600.0, "series": [{"data": [[1.63357104E12, 600.0], [1.63357074E12, 600.0], [1.6335714E12, 600.0], [1.6335711E12, 600.0], [1.6335708E12, 600.0], [1.63357146E12, 600.0], [1.63357116E12, 600.0], [1.63357086E12, 600.0], [1.63357152E12, 535.0223410835791], [1.63357122E12, 600.0], [1.63357092E12, 600.0], [1.63357062E12, 600.0], [1.63357128E12, 600.0], [1.63357098E12, 600.0], [1.63357068E12, 600.0], [1.63357134E12, 600.0]], "isOverall": false, "label": "app1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63357152E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 4.0, "minX": 23.0, "maxY": 110.0, "series": [{"data": [[23.0, 6.416666666666667], [59.0, 12.804878048780488], [66.0, 17.44736842105263], [79.0, 18.998265394622724], [76.0, 18.177777777777777], [82.0, 21.451612903225808], [81.0, 19.973134328358196], [80.0, 17.510638297872344], [87.0, 19.4414039262344], [86.0, 19.386934673366827], [85.0, 16.95], [90.0, 16.952380952380953], [89.0, 18.294416243654826], [88.0, 19.54375], [96.0, 14.909090909090908], [100.0, 16.204545454545457], [106.0, 16.20212765957447], [104.0, 16.56521739130435], [109.0, 19.704545454545457], [108.0, 17.744680851063826], [113.0, 23.000000000000004], [119.0, 17.68181818181818], [116.0, 21.044444444444444], [123.0, 17.369565217391308], [127.0, 18.510638297872347], [125.0, 21.84782608695652], [134.0, 26.130434782608692], [133.0, 19.489361702127663], [132.0, 14.553191489361701], [129.0, 16.377777777777776], [128.0, 21.446808510638302], [143.0, 16.086956521739125], [142.0, 21.434027777777764], [140.0, 17.000000000000004], [139.0, 15.319148936170214], [137.0, 17.3404255319149], [136.0, 19.127659574468083], [151.0, 20.222222222222225], [149.0, 17.217391304347824], [145.0, 21.863636363636367], [157.0, 16.295454545454543], [156.0, 20.82978723404255], [154.0, 15.847826086956522], [164.0, 15.113636363636363], [161.0, 14.946236559139786], [175.0, 18.391304347826086], [174.0, 17.447916666666654], [173.0, 18.378947368421056], [172.0, 19.547368421052628], [171.0, 17.19148936170212], [169.0, 23.659574468085108], [168.0, 22.4468085106383], [180.0, 18.478571428571428], [179.0, 16.273684210526316], [178.0, 19.872340425531917], [177.0, 14.72340425531915], [184.0, 18.131578947368425], [194.0, 12.611111111111109], [206.0, 13.749999999999996], [222.0, 12.451612903225808], [239.0, 11.0], [264.0, 15.076923076923077], [286.0, 9.736842105263156], [315.0, 9.944444444444445], [345.0, 8.904761904761905], [374.0, 7.0], [372.0, 12.0], [375.0, 6.0], [399.0, 8.0], [430.0, 10.559999999999999], [453.0, 14.733333333333334], [472.0, 9.714285714285715], [474.0, 4.0], [503.0, 10.0], [498.0, 9.705882352941176], [508.0, 8.0], [504.0, 9.5], [511.0, 9.0], [543.0, 21.0], [541.0, 110.0], [523.0, 5.0], [538.0, 93.0], [514.0, 9.920000000000002], [513.0, 8.0], [524.0, 4.0], [512.0, 8.666666666666666], [551.0, 19.0], [554.0, 17.5], [575.0, 13.333333333333334], [568.0, 16.0], [552.0, 18.0], [558.0, 17.0], [546.0, 20.0], [548.0, 19.0], [553.0, 18.0], [566.0, 17.0], [565.0, 17.0], [560.0, 17.0], [564.0, 17.0], [555.0, 18.0], [600.0, 43.78566745817674], [599.0, 21.000000000000004], [598.0, 23.374999999999996], [595.0, 8.0], [593.0, 15.133333333333333], [594.0, 11.666666666666666], [592.0, 17.71428571428571], [578.0, 61.446808510638306], [590.0, 14.0], [577.0, 40.55555555555555]], "isOverall": false, "label": "AuthzUser", "isController": false}, {"data": [[596.0109199349969, 43.57476475285914]], "isOverall": false, "label": "AuthzUser-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 600.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 8281.05, "minX": 1.63357062E12, "maxY": 8047879.333333333, "series": [{"data": [[1.63357104E12, 7952557.95], [1.63357074E12, 7965606.516666667], [1.6335714E12, 7922874.05], [1.6335711E12, 7974390.566666666], [1.6335708E12, 7953755.566666666], [1.63357146E12, 7952691.583333333], [1.63357116E12, 7901167.066666666], [1.63357086E12, 7976920.183333334], [1.63357152E12, 7317778.466666667], [1.63357122E12, 8041624.316666666], [1.63357092E12, 7896773.333333333], [1.63357062E12, 401796.4], [1.63357128E12, 7964805.883333334], [1.63357098E12, 8047879.333333333], [1.63357068E12, 7974552.283333333], [1.63357134E12, 7953354.583333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63357104E12, 166259.63333333333], [1.63357074E12, 165914.36666666667], [1.6335714E12, 165638.95], [1.6335711E12, 166716.1], [1.6335708E12, 166284.68333333332], [1.63357146E12, 166262.41666666666], [1.63357116E12, 165185.26666666666], [1.63357086E12, 166768.98333333334], [1.63357152E12, 152988.7], [1.63357122E12, 168121.68333333332], [1.63357092E12, 165093.41666666666], [1.63357062E12, 8281.05], [1.63357128E12, 166515.7], [1.63357098E12, 168252.5], [1.63357068E12, 165604.21666666667], [1.63357134E12, 166276.33333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63357152E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 33.19514522474254, "minX": 1.63357062E12, "maxY": 1749.0851557322737, "series": [{"data": [[1.63357104E12, 36.68158837513007], [1.63357074E12, 41.39388621473435], [1.6335714E12, 36.35746332610763], [1.6335711E12, 39.60609703162063], [1.6335708E12, 37.08159951793509], [1.63357146E12, 33.19514522474254], [1.63357116E12, 38.669491811012676], [1.63357086E12, 37.22285828729754], [1.63357152E12, 36.876469089982905], [1.63357122E12, 35.72382166448712], [1.63357092E12, 35.59863440950859], [1.63357062E12, 1749.0851557322737], [1.63357128E12, 37.345100792297494], [1.63357098E12, 36.971679073614496], [1.63357068E12, 43.59333210904968], [1.63357134E12, 40.69785738198899]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63357152E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 33.075885159453776, "minX": 1.63357062E12, "maxY": 1746.156063618283, "series": [{"data": [[1.63357104E12, 36.55512773294945], [1.63357074E12, 41.261816419307856], [1.6335714E12, 36.232175564181034], [1.6335711E12, 39.474323015793566], [1.6335708E12, 36.960664847764015], [1.63357146E12, 33.075885159453776], [1.63357116E12, 38.54057424007495], [1.63357086E12, 37.11559323731176], [1.63357152E12, 36.74769857730238], [1.63357122E12, 35.58906014601875], [1.63357092E12, 35.47579870184635], [1.63357062E12, 1746.156063618283], [1.63357128E12, 37.218266305619565], [1.63357098E12, 36.85846153846189], [1.63357068E12, 43.46005776390258], [1.63357134E12, 40.577050552393985]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63357152E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.09376417805111655, "minX": 1.63357062E12, "maxY": 1594.3260437375768, "series": [{"data": [[1.63357104E12, 0.10617069005926183], [1.63357074E12, 0.13100013370771482], [1.6335714E12, 0.09376417805111655], [1.6335711E12, 0.10098834685632245], [1.6335708E12, 0.12059990291749667], [1.63357146E12, 0.0955888507575123], [1.63357116E12, 0.09806564669407523], [1.63357086E12, 0.10494517415758524], [1.63357152E12, 0.10386420696430512], [1.63357122E12, 0.10107113885071947], [1.63357092E12, 0.1121301525752339], [1.63357062E12, 1594.3260437375768], [1.63357128E12, 0.09796743890616127], [1.63357098E12, 0.0990736145574856], [1.63357068E12, 0.21432745120953703], [1.63357134E12, 0.09464345497154307]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63357152E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 3.0, "minX": 1.63357062E12, "maxY": 10390.0, "series": [{"data": [[1.63357104E12, 297.0], [1.63357074E12, 280.0], [1.6335714E12, 339.0], [1.6335711E12, 306.0], [1.6335708E12, 256.0], [1.63357146E12, 258.0], [1.63357116E12, 289.0], [1.63357086E12, 278.0], [1.63357152E12, 265.0], [1.63357122E12, 314.0], [1.63357092E12, 273.0], [1.63357062E12, 10390.0], [1.63357128E12, 266.0], [1.63357098E12, 308.0], [1.63357068E12, 365.0], [1.63357134E12, 305.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63357104E12, 188.0], [1.63357074E12, 188.0], [1.6335714E12, 243.0], [1.6335711E12, 251.0], [1.6335708E12, 219.0], [1.63357146E12, 180.9900000000016], [1.63357116E12, 184.0], [1.63357086E12, 208.0], [1.63357152E12, 199.9900000000016], [1.63357122E12, 219.0], [1.63357092E12, 186.0], [1.63357062E12, 10258.81], [1.63357128E12, 212.0], [1.63357098E12, 189.0], [1.63357068E12, 226.0], [1.63357134E12, 247.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63357104E12, 255.99841819762878], [1.63357074E12, 238.0], [1.6335714E12, 285.9994727325429], [1.6335711E12, 303.0], [1.6335708E12, 247.99947273254293], [1.63357146E12, 206.0], [1.63357116E12, 221.9978909301717], [1.63357086E12, 234.99841819762878], [1.63357152E12, 226.0], [1.63357122E12, 250.99947273254293], [1.63357092E12, 214.9963091278005], [1.63357062E12, 10390.0], [1.63357128E12, 242.99947273254293], [1.63357098E12, 209.0], [1.63357068E12, 256.0], [1.63357134E12, 303.9994727325429]], "isOverall": false, "label": "99.99th percentile", "isController": false}, {"data": [[1.63357104E12, 213.0], [1.63357074E12, 230.0], [1.6335714E12, 274.99861038207746], [1.6335711E12, 288.0], [1.6335708E12, 240.0], [1.63357146E12, 198.0], [1.63357116E12, 210.0], [1.63357086E12, 227.0], [1.63357152E12, 217.99930519103873], [1.63357122E12, 246.99930519103873], [1.63357092E12, 197.0], [1.63357062E12, 10362.90523033142], [1.63357128E12, 231.99930519103873], [1.63357098E12, 200.0], [1.63357068E12, 254.0], [1.63357134E12, 293.0]], "isOverall": false, "label": "99.9th percentile", "isController": false}, {"data": [[1.63357104E12, 4.0], [1.63357074E12, 4.0], [1.6335714E12, 4.0], [1.6335711E12, 4.0], [1.6335708E12, 4.0], [1.63357146E12, 4.0], [1.63357116E12, 4.0], [1.63357086E12, 4.0], [1.63357152E12, 4.0], [1.63357122E12, 4.0], [1.63357092E12, 4.0], [1.63357062E12, 6.0], [1.63357128E12, 4.0], [1.63357098E12, 4.0], [1.63357068E12, 4.0], [1.63357134E12, 3.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63357104E12, 20.0], [1.63357074E12, 22.0], [1.6335714E12, 22.0], [1.6335711E12, 21.0], [1.6335708E12, 22.0], [1.63357146E12, 20.0], [1.63357116E12, 21.0], [1.63357086E12, 21.0], [1.63357152E12, 20.0], [1.63357122E12, 20.0], [1.63357092E12, 21.0], [1.63357062E12, 52.0], [1.63357128E12, 21.0], [1.63357098E12, 21.0], [1.63357068E12, 21.0], [1.63357134E12, 22.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63357152E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 14.0, "minX": 296.0, "maxY": 8276.0, "series": [{"data": [[296.0, 23.0], [372.0, 17.0], [397.0, 20.0], [399.0, 19.0], [396.0, 19.0], [413.0, 19.0], [407.0, 19.0], [408.0, 20.0], [421.0, 18.0], [423.0, 21.0], [427.0, 19.0], [426.0, 20.0], [443.0, 22.0], [437.0, 18.0], [447.0, 21.0], [438.0, 18.0], [452.0, 20.0], [453.0, 17.0], [456.0, 19.0], [463.0, 24.0], [466.0, 40.0], [479.0, 21.0], [473.0, 22.0], [490.0, 20.0], [486.0, 23.0], [480.0, 18.5], [482.0, 20.0], [481.0, 22.0], [493.0, 26.0], [511.0, 17.0], [496.0, 18.0], [536.0, 18.0], [542.0, 18.0], [554.0, 8276.0], [575.0, 18.0], [552.0, 32.5], [565.0, 28.0], [549.0, 27.0], [583.0, 24.0], [603.0, 20.0], [595.0, 19.0], [579.0, 22.0], [578.0, 34.0], [582.0, 17.0], [625.0, 19.0], [609.0, 20.0], [626.0, 21.0], [612.0, 20.0], [627.0, 19.0], [618.0, 19.0], [628.0, 18.0], [631.0, 28.0], [613.0, 28.0], [660.0, 18.0], [667.0, 20.0], [669.0, 23.0], [664.0, 19.0], [649.0, 88.0], [687.0, 19.0], [681.0, 21.0], [692.0, 22.0], [696.0, 19.0], [673.0, 19.0], [674.0, 19.0], [702.0, 20.0], [677.0, 19.0], [689.0, 14.0], [720.0, 21.0], [726.0, 20.0], [723.0, 18.0], [731.0, 27.0], [735.0, 100.0], [714.0, 19.0], [711.0, 21.0], [704.0, 19.0], [750.0, 20.0], [763.0, 19.0], [767.0, 20.0], [770.0, 22.0], [772.0, 20.5], [779.0, 21.0], [782.0, 20.0], [778.0, 20.0], [777.0, 20.0], [774.0, 20.0], [780.0, 19.0], [771.0, 19.0], [796.0, 20.0], [788.0, 126.0], [799.0, 18.0], [795.0, 27.0], [821.0, 20.0], [815.0, 21.0], [800.0, 19.0], [808.0, 20.0], [805.0, 19.0], [830.0, 21.0], [801.0, 136.0], [829.0, 166.0], [837.0, 21.0], [849.0, 19.0], [838.0, 18.0], [840.0, 19.0], [863.0, 20.0], [859.0, 20.0], [847.0, 188.0], [879.0, 114.0], [869.0, 19.0], [877.0, 136.0], [921.0, 20.0], [911.0, 188.0], [910.0, 18.0], [909.0, 19.0], [922.0, 19.0], [956.0, 25.0], [941.0, 20.0], [959.0, 17.0], [957.0, 138.0], [938.0, 19.0], [931.0, 19.0], [951.0, 108.0], [953.0, 119.0], [945.0, 18.0], [984.0, 20.0], [991.0, 20.0], [989.0, 20.0], [990.0, 20.0], [988.0, 20.0], [985.0, 20.0], [987.0, 22.0], [986.0, 20.0], [980.0, 20.0], [983.0, 19.0], [982.0, 19.0], [981.0, 19.0], [979.0, 19.0], [977.0, 19.0], [976.0, 20.0], [978.0, 19.0], [964.0, 24.0], [970.0, 21.0], [975.0, 20.0], [961.0, 90.0], [974.0, 19.0], [973.0, 20.0], [972.0, 20.0], [971.0, 19.0], [968.0, 19.0], [969.0, 21.0], [966.0, 21.0], [997.0, 20.0], [1003.0, 20.0], [1010.0, 20.0], [1011.0, 19.0], [992.0, 20.0], [1005.0, 19.0], [1004.0, 19.0], [1007.0, 20.0], [1006.0, 19.0], [995.0, 20.0], [996.0, 19.0], [993.0, 20.0], [994.0, 20.0], [1009.0, 19.0], [998.0, 20.0], [999.0, 20.0], [1016.0, 19.0], [1023.0, 29.0], [1021.0, 123.0], [1019.0, 87.0], [1018.0, 18.0], [1017.0, 19.0], [1008.0, 19.0], [1012.0, 19.0], [1013.0, 20.0], [1014.0, 20.0], [1015.0, 21.0], [1000.0, 20.0], [1002.0, 20.0], [1001.0, 19.0], [1069.0, 180.0], [1039.0, 165.0], [1032.0, 160.0], [1025.0, 18.0], [1078.0, 21.0], [1057.0, 139.0], [1049.0, 18.0], [1147.0, 89.0], [1088.0, 19.0], [1132.0, 20.0], [1119.0, 145.0], [1144.0, 153.0], [1122.0, 119.0], [1148.0, 39.0], [1142.0, 115.0], [1133.0, 123.0], [1102.0, 139.0], [1099.0, 20.0], [1204.0, 133.0], [1207.0, 95.0], [1174.0, 111.0], [1171.0, 104.0], [1200.0, 152.0], [1167.0, 126.0], [1210.0, 139.0], [1190.0, 92.0], [1197.0, 70.0], [1196.0, 23.0], [1193.0, 22.0], [1181.0, 114.0], [1176.0, 127.0], [1154.0, 89.5], [1152.0, 20.0], [1162.0, 83.0], [1156.0, 20.0], [1165.0, 73.0], [1175.0, 113.0], [1225.0, 96.0], [1275.0, 175.0], [1271.0, 122.0], [1261.0, 23.0], [1258.0, 87.0], [1262.0, 92.0], [1252.0, 24.0], [1236.0, 161.5], [1232.0, 77.0], [1239.0, 87.0], [1268.0, 155.5], [1229.0, 98.0], [1216.0, 32.0], [1240.0, 22.0], [1218.0, 119.0], [1221.0, 117.0], [1295.0, 121.0], [1314.0, 143.0], [1281.0, 217.0], [1291.0, 110.0], [1327.0, 137.0], [1326.0, 120.0], [1329.0, 117.0], [1334.0, 27.0], [1337.0, 77.0], [1343.0, 137.0], [1309.0, 76.0], [1299.0, 132.0], [1304.0, 89.0], [1303.0, 116.0], [1315.0, 112.0], [1322.0, 27.0], [1324.0, 77.0], [1359.0, 105.0], [1375.0, 76.0], [1348.0, 75.0], [1367.0, 116.0], [1362.0, 29.0], [1364.0, 28.0], [1382.0, 75.0], [1381.0, 26.0], [1406.0, 25.0], [1351.0, 107.0], [1353.0, 32.0], [1352.0, 27.0], [1403.0, 79.0], [1397.0, 72.0], [1368.0, 98.0], [1467.0, 258.0], [1434.0, 84.0], [1408.0, 37.0], [1435.0, 31.0], [1412.0, 31.0], [1462.0, 29.0], [1465.0, 123.0], [1451.0, 105.0], [1535.0, 33.0], [1503.0, 35.0], [1514.0, 31.5], [1482.0, 31.0], [1522.0, 50.0], [1476.0, 35.0], [1497.0, 65.0], [1494.0, 32.0], [1491.0, 80.0], [1519.0, 64.0], [1510.0, 106.5], [1509.0, 33.0], [1504.0, 29.0], [1565.0, 77.0], [1584.0, 57.0], [1561.0, 46.0], [1552.0, 46.5], [1558.0, 38.0], [1574.0, 77.0], [1575.0, 44.0], [1577.0, 99.0], [1596.0, 72.5], [1551.0, 55.0], [1545.0, 39.0], [1543.0, 40.0], [1550.0, 33.5], [1537.0, 40.0], [1540.0, 88.0], [1568.0, 36.0], [1571.0, 90.0], [1562.0, 76.5], [1564.0, 61.0], [1689.0, 128.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1689.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 14.0, "minX": 296.0, "maxY": 8275.5, "series": [{"data": [[296.0, 23.0], [372.0, 17.0], [397.0, 20.0], [399.0, 18.0], [396.0, 19.0], [413.0, 19.0], [407.0, 19.0], [408.0, 19.0], [421.0, 18.0], [423.0, 21.0], [427.0, 19.0], [426.0, 20.0], [443.0, 22.0], [437.0, 18.0], [447.0, 21.0], [438.0, 18.0], [452.0, 20.0], [453.0, 17.0], [456.0, 19.0], [463.0, 24.0], [466.0, 39.5], [479.0, 21.0], [473.0, 22.0], [490.0, 20.0], [486.0, 23.0], [480.0, 18.5], [482.0, 20.0], [481.0, 22.0], [493.0, 26.0], [511.0, 17.0], [496.0, 18.0], [536.0, 18.0], [542.0, 18.0], [554.0, 8275.5], [575.0, 18.0], [552.0, 32.0], [565.0, 28.0], [549.0, 27.0], [583.0, 24.0], [603.0, 20.0], [595.0, 19.0], [579.0, 22.0], [578.0, 34.0], [582.0, 17.0], [625.0, 19.0], [609.0, 20.0], [626.0, 20.0], [612.0, 19.0], [627.0, 19.0], [618.0, 18.0], [628.0, 18.0], [631.0, 27.0], [613.0, 28.0], [660.0, 18.0], [667.0, 20.0], [669.0, 23.0], [664.0, 19.0], [649.0, 88.0], [687.0, 18.0], [681.0, 21.0], [692.0, 22.0], [696.0, 19.0], [673.0, 19.0], [674.0, 19.0], [702.0, 20.0], [677.0, 18.0], [689.0, 14.0], [720.0, 21.0], [726.0, 20.0], [723.0, 18.0], [731.0, 27.0], [735.0, 100.0], [714.0, 19.0], [711.0, 20.0], [704.0, 19.0], [750.0, 20.0], [763.0, 19.0], [767.0, 19.0], [770.0, 21.5], [772.0, 20.0], [779.0, 21.0], [782.0, 20.0], [778.0, 19.0], [777.0, 20.0], [774.0, 20.0], [780.0, 19.0], [771.0, 19.0], [796.0, 20.0], [788.0, 126.0], [799.0, 18.0], [795.0, 27.0], [821.0, 20.0], [815.0, 21.0], [800.0, 19.0], [808.0, 20.0], [805.0, 19.0], [830.0, 21.0], [801.0, 136.0], [829.0, 166.0], [837.0, 21.0], [849.0, 19.0], [838.0, 18.0], [840.0, 19.0], [863.0, 19.0], [859.0, 19.0], [847.0, 187.0], [879.0, 114.0], [869.0, 19.0], [877.0, 136.0], [921.0, 19.0], [911.0, 188.0], [910.0, 18.0], [909.0, 19.0], [922.0, 19.0], [956.0, 25.0], [941.0, 20.0], [959.0, 17.0], [957.0, 138.0], [938.0, 19.0], [931.0, 19.0], [951.0, 108.0], [953.0, 118.0], [945.0, 18.0], [984.0, 20.0], [991.0, 19.0], [989.0, 20.0], [990.0, 20.0], [988.0, 19.0], [985.0, 20.0], [987.0, 21.0], [986.0, 20.0], [980.0, 19.0], [983.0, 19.0], [982.0, 19.0], [981.0, 19.0], [979.0, 19.0], [977.0, 19.0], [976.0, 20.0], [978.0, 19.0], [964.0, 24.0], [970.0, 21.0], [975.0, 20.0], [961.0, 90.0], [974.0, 19.0], [973.0, 20.0], [972.0, 20.0], [971.0, 19.0], [968.0, 19.0], [969.0, 21.0], [966.0, 20.0], [997.0, 20.0], [1003.0, 20.0], [1010.0, 20.0], [1011.0, 19.0], [992.0, 19.0], [1005.0, 19.0], [1004.0, 19.0], [1007.0, 20.0], [1006.0, 19.0], [995.0, 20.0], [996.0, 19.0], [993.0, 19.0], [994.0, 20.0], [1009.0, 19.0], [998.0, 20.0], [999.0, 20.0], [1016.0, 19.0], [1023.0, 29.0], [1021.0, 123.0], [1019.0, 87.0], [1018.0, 18.0], [1017.0, 19.0], [1008.0, 19.0], [1012.0, 19.0], [1013.0, 20.0], [1014.0, 20.0], [1015.0, 21.0], [1000.0, 20.0], [1002.0, 19.0], [1001.0, 19.0], [1069.0, 180.0], [1039.0, 164.0], [1032.0, 159.5], [1025.0, 18.0], [1078.0, 20.0], [1057.0, 139.0], [1049.0, 18.0], [1147.0, 89.0], [1088.0, 19.0], [1132.0, 20.0], [1119.0, 144.0], [1144.0, 152.5], [1122.0, 118.5], [1148.0, 39.0], [1142.0, 115.0], [1133.0, 123.0], [1102.0, 139.0], [1099.0, 20.0], [1204.0, 132.0], [1207.0, 95.0], [1174.0, 111.0], [1171.0, 104.0], [1200.0, 151.5], [1167.0, 126.0], [1210.0, 138.0], [1190.0, 92.0], [1197.0, 70.0], [1196.0, 23.0], [1193.0, 22.0], [1181.0, 114.0], [1176.0, 127.0], [1154.0, 89.0], [1152.0, 20.0], [1162.0, 83.0], [1156.0, 20.0], [1165.0, 73.0], [1175.0, 113.0], [1225.0, 96.0], [1275.0, 175.0], [1271.0, 122.0], [1261.0, 23.0], [1258.0, 87.0], [1262.0, 92.0], [1252.0, 23.0], [1236.0, 161.5], [1232.0, 77.0], [1239.0, 87.0], [1268.0, 155.5], [1229.0, 98.0], [1216.0, 32.0], [1240.0, 22.0], [1218.0, 118.5], [1221.0, 117.0], [1295.0, 121.0], [1314.0, 143.0], [1281.0, 217.0], [1291.0, 110.0], [1327.0, 137.0], [1326.0, 120.0], [1329.0, 117.0], [1334.0, 27.0], [1337.0, 77.0], [1343.0, 137.0], [1309.0, 75.0], [1299.0, 132.0], [1304.0, 89.0], [1303.0, 116.0], [1315.0, 112.0], [1322.0, 27.0], [1324.0, 77.0], [1359.0, 104.0], [1375.0, 76.0], [1348.0, 75.0], [1367.0, 116.0], [1362.0, 28.0], [1364.0, 28.0], [1382.0, 75.0], [1381.0, 26.0], [1406.0, 25.0], [1351.0, 107.0], [1353.0, 31.0], [1352.0, 27.0], [1403.0, 79.0], [1397.0, 71.0], [1368.0, 98.0], [1467.0, 251.0], [1434.0, 84.0], [1408.0, 37.0], [1435.0, 31.0], [1412.0, 31.0], [1462.0, 29.0], [1465.0, 122.0], [1451.0, 105.0], [1535.0, 33.0], [1503.0, 35.0], [1514.0, 31.0], [1482.0, 31.0], [1522.0, 50.0], [1476.0, 35.0], [1497.0, 65.0], [1494.0, 32.0], [1491.0, 80.0], [1519.0, 64.0], [1510.0, 106.0], [1509.0, 33.0], [1504.0, 29.0], [1565.0, 77.0], [1584.0, 57.0], [1561.0, 46.0], [1552.0, 46.0], [1558.0, 38.0], [1574.0, 77.0], [1575.0, 43.0], [1577.0, 99.0], [1596.0, 72.0], [1551.0, 55.0], [1545.0, 39.0], [1543.0, 40.0], [1550.0, 33.5], [1537.0, 40.0], [1540.0, 88.0], [1568.0, 36.0], [1571.0, 89.0], [1562.0, 76.0], [1564.0, 61.0], [1689.0, 128.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1689.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 51.1, "minX": 1.63357062E12, "maxY": 998.6666666666666, "series": [{"data": [[1.63357104E12, 995.5666666666667], [1.63357074E12, 996.8666666666667], [1.6335714E12, 991.5666666666667], [1.6335711E12, 998.5833333333334], [1.6335708E12, 996.0], [1.63357146E12, 995.6333333333333], [1.63357116E12, 997.9833333333333], [1.63357086E12, 998.6666666666666], [1.63357152E12, 915.5333333333333], [1.63357122E12, 997.7333333333333], [1.63357092E12, 997.45], [1.63357062E12, 51.1], [1.63357128E12, 997.3333333333334], [1.63357098E12, 997.8333333333334], [1.63357068E12, 998.3166666666667], [1.63357134E12, 996.0833333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63357152E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 50.3, "minX": 1.63357062E12, "maxY": 1007.5, "series": [{"data": [[1.63357104E12, 995.5666666666667], [1.63357074E12, 997.2], [1.6335714E12, 991.85], [1.6335711E12, 998.3], [1.6335708E12, 995.7166666666667], [1.63357146E12, 995.5833333333334], [1.63357116E12, 989.1333333333333], [1.63357086E12, 998.6166666666667], [1.63357152E12, 916.1], [1.63357122E12, 1006.7166666666667], [1.63357092E12, 988.5833333333334], [1.63357062E12, 50.3], [1.63357128E12, 997.1], [1.63357098E12, 1007.5], [1.63357068E12, 998.3166666666667], [1.63357134E12, 995.6666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63357152E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 50.3, "minX": 1.63357062E12, "maxY": 1007.5, "series": [{"data": [[1.63357104E12, 995.5666666666667], [1.63357074E12, 997.2], [1.6335714E12, 991.85], [1.6335711E12, 998.3], [1.6335708E12, 995.7166666666667], [1.63357146E12, 995.5833333333334], [1.63357116E12, 989.1333333333333], [1.63357086E12, 998.6166666666667], [1.63357152E12, 916.1], [1.63357122E12, 1006.7166666666667], [1.63357092E12, 988.5833333333334], [1.63357062E12, 50.3], [1.63357128E12, 997.1], [1.63357098E12, 1007.5], [1.63357068E12, 998.3166666666667], [1.63357134E12, 995.6666666666666]], "isOverall": false, "label": "AuthzUser-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63357152E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 50.3, "minX": 1.63357062E12, "maxY": 1007.5, "series": [{"data": [[1.63357104E12, 995.5666666666667], [1.63357074E12, 997.2], [1.6335714E12, 991.85], [1.6335711E12, 998.3], [1.6335708E12, 995.7166666666667], [1.63357146E12, 995.5833333333334], [1.63357116E12, 989.1333333333333], [1.63357086E12, 998.6166666666667], [1.63357152E12, 916.1], [1.63357122E12, 1006.7166666666667], [1.63357092E12, 988.5833333333334], [1.63357062E12, 50.3], [1.63357128E12, 997.1], [1.63357098E12, 1007.5], [1.63357068E12, 998.3166666666667], [1.63357134E12, 995.6666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63357152E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

