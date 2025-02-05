# **Forms**

### **Types of Form Controls in HTML**  
Form controls are elements that allow users to input data into a web form. These controls include input fields, buttons, checkboxes, radio buttons, dropdowns, and more.

---

## **1️⃣ Text Input Controls**
These allow users to enter text-based input.

| Control | Description | Example |
|---------|------------|---------|
| **Text Field** (`type="text"`) | Allows single-line text input | `<input type="text" name="username">` |
| **Password Field** (`type="password"`) | Hides entered characters | `<input type="password" name="password">` |
| **Textarea** (`<textarea>`) | Multi-line text input | `<textarea name="comments"></textarea>` |

### Example:
```html
<input type="text" name="username" placeholder="Enter your name">
<input type="password" name="password" placeholder="Enter password">
<textarea name="message" rows="4" cols="30" placeholder="Enter your message"></textarea>
```

---

## **2️⃣ Selection Controls**
These allow users to select from predefined options.

| Control | Description | Example |
|---------|------------|---------|
| **Checkbox** (`type="checkbox"`) | Allows multiple selections | `<input type="checkbox" name="hobby" value="sports">` |
| **Radio Button** (`type="radio"`) | Allows only one selection from a group | `<input type="radio" name="gender" value="male">` |
| **Dropdown (`<select>`)** | Provides a drop-down list | `<select><option>Option</option></select>` |

### Example:
```html
<input type="checkbox" name="hobby" value="sports"> Sports
<input type="checkbox" name="hobby" value="music"> Music

<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female

<select name="country">
    <option value="us">USA</option>
    <option value="uk">UK</option>
</select>
```

---

## **3️⃣ Button Controls**
Used to trigger actions such as form submission or JavaScript execution.

| Control | Description | Example |
|---------|------------|---------|
| **Submit Button** (`type="submit"`) | Sends form data to the server | `<input type="submit" value="Send">` |
| **Reset Button** (`type="reset"`) | Clears all input fields | `<input type="reset" value="Reset">` |
| **Button** (`type="button"`) | Custom button for JavaScript functions | `<input type="button" value="Click Me">` |

### Example:
```html
<input type="submit" value="Submit">
<input type="reset" value="Clear">
<button type="button" onclick="alert('Clicked!')">Click Me</button>
```

---

## **4️⃣ File Upload Controls**
These allow users to upload files.

| Control | Description | Example |
|---------|------------|---------|
| **File Input** (`type="file"`) | Allows file selection | `<input type="file" name="profile_picture">` |

### Example:
```html
<input type="file" name="profile_picture">
```

---

## **5️⃣ Date & Time Controls**
These allow users to select dates and times.

| Control | Description | Example |
|---------|------------|---------|
| **Date Picker** (`type="date"`) | Allows date selection | `<input type="date">` |
| **Time Picker** (`type="time"`) | Allows time selection | `<input type="time">` |
| **Date-Time Picker** (`type="datetime-local"`) | Select both date and time | `<input type="datetime-local">` |

### Example:
```html
<input type="date">
<input type="time">
<input type="datetime-local">
```

---

## **6️⃣ Number & Range Controls**
These allow numeric input.

| Control | Description | Example |
|---------|------------|---------|
| **Number Field** (`type="number"`) | Allows numeric input | `<input type="number" min="1" max="100">` |
| **Range Slider** (`type="range"`) | Allows selection within a range | `<input type="range" min="0" max="100">` |

### Example:
```html
<input type="number" min="1" max="10">
<input type="range" min="0" max="100">
```

---

## **7️⃣ Specialized Input Controls**
These are used for specific types of input.

| Control | Description | Example |
|---------|------------|---------|
| **Email Field** (`type="email"`) | Validates email format | `<input type="email">` |
| **URL Field** (`type="url"`) | Validates URL format | `<input type="url">` |
| **Telephone Input** (`type="tel"`) | Allows entering a phone number | `<input type="tel">` |
| **Search Input** (`type="search"`) | Provides a search field | `<input type="search">` |
| **Color Picker** (`type="color"`) | Allows color selection | `<input type="color">` |

### Example:
```html
<input type="email" placeholder="Enter email">
<input type="url" placeholder="Enter website">
<input type="tel" placeholder="Enter phone number">
<input type="search" placeholder="Search">
<input type="color">
```

---

### **Conclusion**
These form controls provide various ways for users to input data, making forms interactive and user-friendly.