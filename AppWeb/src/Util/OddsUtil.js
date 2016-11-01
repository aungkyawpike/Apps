import * as OddsConst from "./OddsConst"

class OddsUtil {

  adjustToCurrentOddsType(odds, oddsType) {

        var awayOdds, homeOdds;

        homeOdds = parseFloat(odds.HomeOdds);
        awayOdds = parseFloat(odds.AwayOdds);
        if (oddsType === OddsConst.HKOdds) {
          homeOdds = this.malayOdds2HKOdds(homeOdds);
          awayOdds = this.malayOdds2HKOdds(awayOdds);
        } else if (oddsType === OddsConst.EuroOdds) {
          homeOdds = this.malayOdds2EuroOdds(homeOdds);
          awayOdds = this.malayOdds2EuroOdds(awayOdds);
        } else if (oddsType === OddsConst.IndoOdds) {
          homeOdds = this.malayOdds2IndoOdds(homeOdds);
          awayOdds = this.malayOdds2IndoOdds(awayOdds);
        }
        odds.Handicap = this.formatHandicap(odds.Handicap);
        odds.HomeOdds = parseFloat(this.make2Digit(homeOdds)).toFixed(2);
        odds.AwayOdds = parseFloat(this.make2Digit(awayOdds)).toFixed(2);
        return odds;

  }

  malayOdds2HKOdds(oddsValue) {
    if (oddsValue < 0) {
      oddsValue = this.truncate2digit(-1 / oddsValue);
    }
    return oddsValue.toFixed(2);
  }

  malayOdds2EuroOdds(oddsValue) {
    if (oddsValue < 0) {
      oddsValue = 1 - this.truncate2digit(1 / oddsValue);
    } else if (oddsValue > 0) {
      oddsValue = 1 + oddsValue;
    }
    return oddsValue.toFixed(2);
  };

  malayOdds2IndoOdds(oddsValue) {
    if (oddsValue !== 0 && oddsValue !== 1) {
      oddsValue = this.truncate2digit(-1 / oddsValue);
    }
    return oddsValue.toFixed(2);
  };

  make2Digit(str) {
    if (str === null || str.length === 0) {
      return "00";
    } else if (str.length === 1) {
      return "0" + str;
    } else {
      return str;
    }
  };

  truncate2digit(num) {
    return ((num * 100) | 0) / 100;
  };

  formatHandicap(hdp) {
      var absHdp, interval, remainder, result, str;

      interval = 0.5;
      if (hdp === '0') {
        return '0';
      } else {
        absHdp = Math.abs(hdp);
        result = (absHdp / interval) | 0;
        remainder = absHdp % interval;
        if (remainder > 0) {
          return result * interval + "-" + (result + 1) * interval;
        } else {
          str = new String(absHdp);
          if (str.indexOf(".") === -1) {
            return str + ".0";
          } else {
            return str;
          }
        }
      }
    };

}

const oddsUtil = new OddsUtil
export default oddsUtil