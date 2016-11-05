
import Countdown from 'react-count-down'


class TestComponent extends Component {
  render () {
    let OPTIONS = { endDate: '10/19/2016 10:12 AM', prefix: 'until my birthday!' }

    return (
      <div>
        <Countdown options={OPTIONS} />
      </div>
    )
  }
}