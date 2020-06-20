import { RkTheme } from 'react-native-ui-kitten';
import Colors from './Colors';

export default (initializeRkSettings = () => {
  // ============== BUTTONS ==============
  // Small Buttons
  RkTheme.setType('RkButton', 'smallPrimary', {
    backgroundColor: Colors.primaryColor,
    height: 40,
    width: 'auto',
    borderRadius: 200,
    borderWidth: 0,
    margin: 10,
    paddingHorizontal: 30
  });

  RkTheme.setType('RkButton', 'smallSecondary', {
    backgroundColor: Colors.secondaryColor,
    height: 40,
    width: 'auto',
    borderRadius: 200,
    borderWidth: 0,
    margin: 10,
    paddingHorizontal: 30
  });

  RkTheme.setType('RkButton', 'smallLight', {
    backgroundColor: Colors.lightColorTwo,
    height: 40,
    width: 'auto',
    borderRadius: 200,
    borderWidth: 0,
    margin: 10,
    paddingHorizontal: 30
  });

  RkTheme.setType('RkButton', 'smallGrey', {
    backgroundColor: Colors.disabledButton,
    height: 40,
    width: 'auto',
    borderRadius: 200,
    borderWidth: 0,
    margin: 10,
    paddingHorizontal: 30
  });

  // Normal Buttons
  RkTheme.setType('RkButton', 'normalPrimary', {
    backgroundColor: Colors.primaryColor,
    height: 50,
    width: 'auto',
    borderRadius: 200,
    borderWidth: 0,
    margin: 10,
    paddingHorizontal: 30
  });

  RkTheme.setType('RkButton', 'normalSecondary', {
    backgroundColor: Colors.secondaryColor,
    height: 50,
    width: 'auto',
    borderRadius: 200,
    borderWidth: 0,
    margin: 10,
    paddingHorizontal: 30
  });

  RkTheme.setType('RkButton', 'normalLight', {
    backgroundColor: Colors.lightColorTwo,
    height: 50,
    width: 'auto',
    borderRadius: 200,
    borderWidth: 0,
    margin: 10,
    paddingHorizontal: 30
  });

  RkTheme.setType('RkButton', 'normalGrey', {
    backgroundColor: Colors.disabledButton,
    height: 50,
    width: 'auto',
    borderRadius: 200,
    borderWidth: 0,
    margin: 10,
    paddingHorizontal: 30
  });

  // Big buttons
  RkTheme.setType('RkButton', 'bigPrimary', {
    backgroundColor: Colors.primaryColor,
    height: 60,
    width: 'auto',
    borderRadius: 200,
    borderWidth: 0,
    margin: 10,
    paddingHorizontal: 30
  });

  RkTheme.setType('RkButton', 'bigSecondary', {
    backgroundColor: Colors.secondaryColor,
    height: 60,
    width: 'auto',
    borderRadius: 200,
    borderWidth: 0,
    margin: 10,
    paddingHorizontal: 30
  });

  RkTheme.setType('RkButton', 'bigLight', {
    backgroundColor: Colors.lightColorTwo,
    height: 60,
    width: 'auto',
    borderRadius: 200,
    borderWidth: 0,
    margin: 10,
    paddingHorizontal: 30
  });

  RkTheme.setType('RkButton', 'bigGrey', {
    backgroundColor: Colors.disabledButton,
    height: 60,
    width: 'auto',
    borderRadius: 200,
    borderWidth: 0,
    margin: 10,
    paddingHorizontal: 30
  });

  // Used for Login
  RkTheme.setType('RkButton', 'bigLogin', {
    backgroundColor: Colors.disabledButton,
    height: 60,
    width: '85%', // so both buttons are the same width
    borderRadius: 200,
    borderWidth: 0,
    margin: 10,
    paddingHorizontal: 30
  });
});

// ============== TOGGLES ==============
// Toggle in Feedscreen (Anzeigen) and AddModalScreen
// Normal state
RkTheme.setType('RkText', 'toggle', {
  fontWeight: 'bold',
  fontSize: 20,
  textAlign: 'center',
  backgroundColor: Colors.lightColor,
  color: Colors.white,
  height: 50,
  paddingTop: 12
});

// Toggled State
RkTheme.setType('RkText', 'toggleSelected', {
  fontWeight: 'bold',
  fontSize: 20,
  textAlign: 'center',
  backgroundColor: Colors.white,
  color: Colors.black,
  height: 50,
  paddingTop: 12
});
