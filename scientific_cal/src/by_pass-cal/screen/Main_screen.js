import {useEffect, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../style/main_styles';


function Main_screen() {
  [f_number, set_f_number] = useState('0');
  [se_number, set_se_number] = useState('0');
  [operator, setOperator] = useState('0');

  [value, setValue] = useState('0');
  const [bracketopen, setBracketOpen] = useState(false);

  const operation = (operator, f_number, se_number) => {
    console.log('f_number', f_number);
    console.log('s_number', se_number);
    console.log('operator', operator);

    switch (operator) {
      case '+':
        let sum = parseFloat(f_number) + parseFloat(se_number);
        console.log('sum', sum);
        set_f_number(sum.toString());
        set_se_number('0');

        if (bracketopen == false) {
          setValue(sum.toString());
          setOperator('0');
        }
        break;
      case '-':
        let sub = parseInt(f_number) - parseInt(se_number);

        set_f_number(sub.toString());
        set_se_number('0');
        setOperator('0');
        if (bracketopen == false) {
          setValue(sub.toString());
          setOperator('0');
        }

        console.log('value type========', typeof value);

        break;

      case '/':
        let devide = parseInt(f_number) / parseInt(se_number);

        set_f_number(devide.toString());

        set_se_number('0');

        if (bracketopen == false) {
          setValue(devide.toString());
          setOperator('0');
        }

        console.log('value type========', typeof value);

        break;

      case '*':
        let multi = parseInt(f_number) * parseInt(se_number);

        set_f_number(multi.toString());

        set_se_number('0');

        if (bracketopen == false) {
          setValue(multi.toString());
          setOperator('0');
        }

        console.log('value type========', typeof value);

        break;

      case '%':
        let presentage = parseInt(f_number) / 100;

        set_f_number(presentage.toString());

        set_se_number('0');

        if (bracketopen == false) {
          setValue(presentage.toString());
          setOperator('0');
        }

        console.log('value type========', typeof value);

        break;
    }
  };

  const handlePress = val => {
    if (val == 'AC') {
      setBracketOpen(false);
      setValue('0');

      set_f_number('0');
      set_se_number('0');
      setOperator('0');
    } else if (val == '=') {
      operation(operator, f_number, se_number);
    } else if (val == '+/-') {
    } else if (val == 'back') {
      if (value.length > 1) {
        setValue(value.slice(0, -1));
      } else {
        setValue('0');
      }
    } else if (val == '()') {
      if (value == '0') {
        console.log('bracketopen', bracketopen);
        if (bracketopen == false) {
          setValue('(');

          setBracketOpen(true);

          console.log(bracketopen);
        } else {
          setValue(value + ')');
          setBracketOpen(false);
        }
      } else {
        console.log('bracketopen in else part', bracketopen);

        if (bracketopen == false) {
          setValue(value + '(');

          setBracketOpen(true);

          console.log(bracketopen);
        } else {
          setValue(value + ')');
          setBracketOpen(false);
        }
      }
    } else {
      switch (value == '0') {
        case true:
          if (isNaN(val) && val !== '.') {
            console.log('.................', val == '.');
            setOperator(val);

            setValue(value + val);
          } else {
            if (val == '.') {
              setValue(value + val);

              set_f_number(val);
            } else {
              setValue(val);

              set_f_number(val);
            }
          }
          break;

        case false:
          if (isNaN(val) && val != '.') {
            console.log('.................', val !== '.');

            console.log('.................', val);
            setOperator(val);

            setValue(value + val);

            console.log('add operator' + val + 'value' + value);
            console.log('operator  check', operator == '0');
            if (operator !== '0') {
              console.log('_________________________________________');

              operation(operator, f_number, se_number);
            }
          } else {
            if (operator == '0') {
              set_f_number(f_number + val);
              setValue(value + val);
            } else {
              set_se_number(se_number + val);

              setValue(value + val);

              console.log('update second nmber_______' + se_number);
            }
          }

          break;
      }
    }
  };

  return (
    <View style={styles.main_screen}>
      <View style={styles.display}>
        <Text style={styles.display_text}>{value}</Text>
      </View>

      <View style={styles.keypad}>
        <View style={styles.keypad_row}>
          <TouchableOpacity onPress={() => handlePress('AC')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>AC</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('()')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>( )</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('%')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>%</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('/')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>/</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={styles.keypad_row}>
          <TouchableOpacity onPress={() => handlePress(7)}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('8')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>8</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('9')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>9</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('*')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>*</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={styles.keypad_row}>
          <TouchableOpacity onPress={() => handlePress('4')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>4</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('5')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>5</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('6')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>6</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('-')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>-</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={styles.keypad_row}>
          <TouchableOpacity onPress={() => handlePress('1')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>1</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('2')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>2</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('3')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>3</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('+')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={styles.keypad_row}>
          <TouchableOpacity onPress={() => handlePress('0')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>0</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('.')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('back')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>&lt;</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('=')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>=</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Main_screen;
