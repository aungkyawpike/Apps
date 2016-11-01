import GlobalData from './GlobalData'
import $ from "jquery"

export function getAsyncData(actionName, parameter, callBack){

    //debugger;
    //var getv = GlobalData.baseURL

     
        $.ajax({
                  //url: GlobalData.baseURL + 'Sportsbook/' + actionName,
                  url: 'http://localhost:57772/Sportsbook/' + actionName,
                  data: parameter,
                  async: false,
                  dataType: "json",
                  traditional: true,
                  type: "POST",
                  success: function(result) {
                    var ret, ret2;
                    ret = result;

                    if(actionName==='GetOddsData2'){
                      ret2 = convertToLeagueObj(ret.d)
                      return callBack(ret2);
                    }
                    else
                      return callBack(ret);
                  },
                  error: function(errorThrown) {
                    return false;
                  }
              });

         var parameter = {}

         return
}

function convertToLeagueObj(lgArr){



      var lg, lgJ, lgJArr, _i, _len;

      if (lgArr === null) {
          return [];
      }
      
      lgJArr = [];
      
      for (_i = 0, _len = lgArr.length; _i < _len; _i++) {
          lg = lgArr[_i];
          lgJ = makeLeague(lg);
          lgJArr.push(lgJ);
      }
      
      return lgJArr;

    }

function makeLeague(lg) {
      var i, lgJ, _i, _ref;
      var leaguePropArr = ['LeagueId', 'LeagueName', 'SportId', 'Market', 'Matches'];
      var oddsLinePropArrIdx = [[5, 6, 7], [5, 6, 7, 8], [5, 6, 7, 8, 9, 10], [5, 6, 7, 8, 9, 10], [5, 6, 7], [5, 6, 7], [5, 6, 7], [3], [3], [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], [5, 6, 7], [5, 6, 7, 8], [5, 6, 7], [4], [5, 6, 7, 8, 9, 10], [5, 6, 7, 8, 9, 10], [7, 8, 9, 10], [0, 1]];
      lgJ = {};
      for (i = _i = 0, _ref = lg.length; _i < _ref; i = _i += 1) {
        if (i === 4) {
          lgJ[leaguePropArr[i]] = makeMatchArray(lg[i]);
        } else {
          lgJ[leaguePropArr[i]] = lg[i];
        }
      }
      return lgJ;
    };

function makeMatchArray(mtArr) {
      var mt, mtJArr, _i, _len;
      mtJArr = [];
      for (_i = 0, _len = mtArr.length; _i < _len; _i++) {
        mt = mtArr[_i];
        mtJArr.push(makeMatch(mt));
      }
      return mtJArr;
    };

function makeMatch(mt) {
      var i, mtJ, _i, _ref;
      var matchPropArr = ['MatchId', 'LeagueId', 'Market', 'TimeTmpl', 'SortKey2', 'HomeTeam', 'AwayTeam', 'MatchDate', 'HomeRedCard', 'AwayRedCard', 'OddsLines', 'OpenParlay', 'OpenBetTrade', 'IsSpecial', 'HasH2HInfo', 'HasLiveCentreLink', 'LiveCentreMatchID', 'IsWC2014Match', 'CalculationModel', 'ParentMatchId', 'ChildMatchId', 'SeasonId', 'VirtualSoccerMatchDay', 'VirtualBasketballMatchDay', 'OpenBet1X2', 'IsEuro2016Match', 'IsOlympicMatch','GameOrder','GameTypeCode','IsExotic','LeagueImgUrl','TeamHomeImgURL','TeamAwayImgURL'];
      mtJ = {};
      for (i = _i = 0, _ref = mt.length; _i < _ref; i = _i += 1) {
        if (i === 10) {
          mtJ[matchPropArr[i]] = makeOlArr(mt[i]);
        } else {
          mtJ[matchPropArr[i]] = mt[i];
        }
      }
      return mtJ;
    };


function makeOlArr(olArr) {
      var ol, olJArr, _i, _len;
      olJArr = [];
      for (_i = 0, _len = olArr.length; _i < _len; _i++) {
        ol = olArr[_i];
        olJArr.push(makeOl(ol));
      }
      return olJArr;
    };

function makeOl(ol) {
      var i, oddsLinePropIdx, olJ, propIdx, _i, _ref;
      var oddsLinePropArr = [['OddsLineNo', 'Score', 'Time', 'FavTeam', 'IsValid', 'FT', 'FH', 'SH'], ['OddsLineNo', 'Score', 'Time', 'FavTeam', 'IsValid', 'FTAH', 'FTOU', 'FHAH', 'FHOU'], ['OddsLineNo', 'Score', 'Time', 'FavTeam', 'IsValid', 'FTAH', 'FTOU', 'FHAH', 'FHOU', 'FT1X2', 'FH1X2', 'OddsCount'], ['OddsLineNo', 'Score', 'Time', 'FavTeam', 'IsValid', 'FTAH', 'FTOU', 'FHAH', 'FHOU', 'SHAH', 'SHOU', 'OddsCount'], ['OddsLineNo', 'Score', 'Time', 'FavTeam', 'IsValid', 'FT', 'FH', 'SH', 'OddsCount'], ['OddsLineNo', 'Score', 'Time', 'FavTeam', 'IsValid', 'FT', 'FH', 'SH', 'OddsCount'], ['OddsLineNo', 'Score', 'Time', 'FavTeam', 'IsValid', 'FT', 'FH', 'SH', 'OddsCount'], ['OddsLineNo', 'Score', 'Time', 'HTFT', 'OddsCount'], ['OddsLineNo', 'Score', 'Time', 'FTAHOU', 'OddsCount'], ['OddsLineNo', 'Score', 'Time', 'FTAHOU', 'FHAHOU', 'SHAHOU', 'FT1X2', 'FH1X2', 'SH1X2', 'FTDC', 'FHDC', 'SHDC', 'FTTG', 'FHTG', 'SHTG', 'FTOE', 'FHOE', 'SHOE', 'FTFGLG', 'FHFGLG', 'SHFGLG', 'FTHTFT', 'FTCS', 'FHCS', 'SHCS', 'OddsCount'], ['OddsLineNo', 'Score', 'Time', 'FavTeam', 'IsValid', 'FT', 'FH', 'SH', 'OddsCount'], ['OddsLineNo', 'Score', 'Time', 'FavTeam', 'IsValid', 'FTAH', 'FTOU', 'FT1X2', 'FTOE', 'OddsCount'], ['OddsLineNo', 'Score', 'Time', 'FavTeam', 'IsValid', 'FT', 'FH', 'SH'], ['OutrightLine', 'OutrightTeamId', 'TeamId', 'TeamName', 'OddsStr'], ['OddsLineNo', 'Score', 'Time', 'FavTeam', 'IsValid', 'FT1X2', 'FTAH', 'FTOU', 'FH1X2', 'FHAH', 'FHOU', 'OddsCount'], ['OddsLineNo', 'Score', 'Time', 'FavTeam', 'IsValid', 'FTAH', 'FTOU', 'FHAH', 'FHOU', 'FTOE', 'FHOE', 'OddsCount'], ['OddsLineNo', 'Score', 'Time', 'OpenParly', 'OpenBetTrade', 'FavTeam', 'IsValid', 'FT1X2', 'FTAH', 'FTOU', 'FTOE', 'OddsCount'], ['AH', 'OU']];
      var oddsLinePropArrIdx = [[5, 6, 7], [5, 6, 7, 8], [5, 6, 7, 8, 9, 10], [5, 6, 7, 8, 9, 10], [5, 6, 7], [5, 6, 7], [5, 6, 7], [3], [3], [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], [5, 6, 7], [5, 6, 7, 8], [5, 6, 7], [4], [5, 6, 7, 8, 9, 10], [5, 6, 7, 8, 9, 10], [7, 8, 9, 10], [0, 1]];

      olJ = {};
      oddsLinePropIdx = oddsLinePropArrIdx[ol[0]];
      for (i = _i = 1, _ref = ol.length; _i < _ref; i = _i += 1) {
        propIdx = i - 1;
        if (inArray(oddsLinePropIdx, propIdx) > -1) {
          if (isSubOddsLine(ol[0], propIdx) > -1) {
            olJ[oddsLinePropArr[ol[0]][propIdx]] = makeOlArr(ol[i]);
          } else {
            olJ[oddsLinePropArr[ol[0]][propIdx]] = makeOdd(ol[i]);
          }
        } else {
          olJ[oddsLinePropArr[ol[0]][propIdx]] = ol[i];
        }
      }
      return olJ;
    };

function makeOdd(odds) {
      var i, oddsJ, _i, _ref;
      var oddsPropArr = [['BetTypeId', 'HomeOddsStr', 'AwayOddsStr', 'DrawOddsStr', 'OddsGroupId'], ['BetTypeId', 'HandicapStr', 'Handicap', 'HomeOddsStr', 'HomeOddsClassTag', 'AwayOddsStr', 'AwayOddsClassTag', 'OddsGroupId'], ['BetTypeId', 'IsZeroOdds', 'H1A0', 'H0A1', 'H2A0', 'H0A2', 'H2A1', 'H1A2', 'H3A0', 'H0A3', 'H3A1', 'H1A3', 'H3A2', 'H2A3', 'H4A0', 'H0A4', 'H4A1', 'H1A4', 'H4A2', 'H2A4', 'H4A3', 'H3A4', 'HUP5', 'AUP5', 'H0A0', 'H1A1', 'H2A2', 'H3A3', 'H4A4', 'OddsGroupId'], ['BetTypeId', 'HomeDrawStr', 'AwayDrawStr', 'HomeAwayStr', 'OddsGroupId'], ['BetTypeId', 'HFGoalStr', 'AFGoalStr', 'HLGoalStr', 'ALGoalStr', 'NoGoalStr', 'HNextGoalStr', 'ANextGoalStr', 'OddsGroupId'], ['BetTypeId', 'HHStr', 'HDStr', 'HAStr', 'DHStr', 'DDStr', 'DAStr', 'AHStr', 'ADStr', 'AAStr', 'OddsGroupId'], ['BetTypeId', 'OddStr', 'OddClassTag', 'EvenStr', 'EvenClassTag', 'OddsGroupId'], ['BetTypeId', '_01Str', '_23Str', '_46Str', 'Up7Str', 'OddsGroupId'], ['OutrightId', 'LeagueId', 'SortKey', 'LeagueName', 'ClosingDateStr', 'OddsLines']];
      if (odds != null) {
        oddsJ = {};
        for (i = _i = 1, _ref = odds.length; _i < _ref; i = _i += 1) {
          oddsJ[oddsPropArr[odds[0]][i - 1]] = odds[i];
        }
        return oddsJ;
      } else {
        return null;
      }
    };   

function inArray(arr, data) {
      var e, i, _i, _len;
      var hasIndexOf = false;

      if (hasIndexOf) {
        return arr.indexOf(data);
      } else {
        for (i = _i = 0, _len = arr.length; _i < _len; i = ++_i) {
          e = arr[i];
          if (e === data) {
            return i;
          }
        }
      }
      return -1;
    };

function isSubOddsLine(olNo, idx) {
      var e, i, _i, _len, _ref;
      var subOddsLinePropIdx = [[8, [3]], [9, [3, 4, 5]]];

      _ref = subOddsLinePropIdx;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        e = _ref[i];
        if (e[0] === olNo) {
          return inArray(e[1], idx);
        }
      }
      return -1;
    }; 