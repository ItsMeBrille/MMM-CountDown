# MMM-CountDown

MMM-CountDown is yet another MagicMirror2 module that displays a countdown in hours toward a specific date. Norwegian language

## Installation

Navigate to the `MagicMirror/modules` directory and clone this repository:
```sh
cd ~/MagicMirror/modules
git clone https://github.com/ItsMeBrille/MMM-CountDown.git
```

3. Configure the module in your MagicMirror2 config file (`config/config.js`).

## Configuration

To use MMM-CountDown, add it to the modules array in your MagicMirror2 config file:

```javascript
{
  module: "MMM-CountDown",
  position: "top_left",
  config: {
    targetDate: "2023-12-31T00:00:00", // Replace with your target date in ISO format
    name: "Siste skoledag",
  },
},
```

## Configuration Options

- `targetDate` (required): The target date and time to count down to in ISO format.

## Usage

MMM-CountDown will display the countdown in hours toward the specified target date in the top left corner of your MagicMirror2.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.