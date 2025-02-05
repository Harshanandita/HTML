# **Checkbox**

Yes! You can **fully customize the checkbox appearance**, including the **background color, tick color, shape, and even animations** using CSS. The default blue background and white tick are controlled by the browser, but you can override them in different ways.

---

## **Method 1: Using `accent-color` (Simple & Cross-Browser)**
Modern browsers support `accent-color`, allowing you to change the default checkbox color easily.

```css
input[type="checkbox"] {
    accent-color: red; /* Changes checkbox color */
}
```
### **Pros:**
✔ Works in **Chrome, Edge, Safari, and Firefox**  
✔ Simple, no need for additional styling  
✔ Supports checkboxes and radio buttons  
❌ Limited customization (only background color changes)

---

## **Method 2: Fully Custom Checkbox with CSS**
If you want **complete control** (background, tick symbol, shape), use **custom styling with `::before` and `::after`**.

### **Step 1: Hide Default Checkbox**
```css
input[type="checkbox"] {
    appearance: none; /* Removes default checkbox */
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid gray;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    background-color: white;
}
```

### **Step 2: Create Custom Tick Symbol**
```css
input[type="checkbox"]:checked {
    background-color: red; /* Change background when checked */
    border-color: red; 
}

input[type="checkbox"]::before {
    content: "✔"; /* Custom tick */
    font-size: 16px;
    color: white;
    display: none;
    position: absolute;
    top: 1px;
    left: 3px;
}

input[type="checkbox"]:checked::before {
    display: block;
}
```

### **Step 3: Hover Effects (Optional)**
```css
input[type="checkbox"]:hover {
    border-color: black;
}
```

---

### **Result:**
✔ Custom checkbox with **red background & white tick**  
✔ Tick symbol can be **changed to anything (✔, ✖, ✓, ⬤, etc.)**  
✔ Full control over **size, color, and animations**

---

## **Method 3: Use an Image Instead of Default Checkbox**
If you want a **completely custom icon**, you can replace the default checkbox with an **image**.

```css
input[type="checkbox"] {
    display: none; /* Hide original */
}

input[type="checkbox"] + label {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("unchecked.png") no-repeat center;
    background-size: cover;
    cursor: pointer;
}

input[type="checkbox"]:checked + label {
    background: url("checked.png") no-repeat center;
    background-size: cover;
}
```
**Use any image as a checkbox!** Perfect for modern UI designs.  

---  

## **Conclusion**
| Method | Pros | Cons |
|--------|------|------|
| `accent-color` | Simple, cross-browser | Limited styling control |
| Custom CSS (`::before`) | Full control (color, shape, size, animations) | More code |
| Image Replacement | Fully custom design | Requires images |

For **basic color change**, use **`accent-color`**.  
For **full customization**, use the **`::before` trick**.  
For **icon-based checkboxes**, use the **image method**.

---
&nbsp;  
&nbsp;  
&nbsp;

# Tick

Yes, when you use the `accent-color` property, the **tick color changes to black** instead of the default white. Unfortunately, `accent-color` **does not allow direct control over the tick color**—it only changes the background color of the checkbox.

---

### **Solution 1: Use `filter` to Invert the Tick Color (Hack)**
If you still want to use `accent-color`, you can use `filter: invert(1);` to **force the tick to be white**:

```css
input[type="checkbox"] {
    accent-color: red; /* Changes checkbox color */
    filter: invert(1); /* Inverts colors (tick becomes white) */
}
```
✅ **Works in most modern browsers**  
❌ **Might affect other styles** (test it in your design)

---

### **Solution 2: Use Custom Styling with `::before` for Full Control**
If `filter` is not ideal, the best way is to **hide the default checkbox and create a custom tick using `::before`**:

```css
input[type="checkbox"] {
    appearance: none; /* Remove default styles */
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid red;
    border-radius: 4px;
    cursor: pointer;
    background-color: white;
    position: relative;
}

input[type="checkbox"]:checked {
    background-color: red; /* Custom background */
}

input[type="checkbox"]::before {
    content: "✔"; /* Custom tick symbol */
    font-size: 16px;
    color: white; /* Ensures the tick stays white */
    display: none;
    position: absolute;
    top: 1px;
    left: 3px;
}

input[type="checkbox"]:checked::before {
    display: block;
}
```

✅ **Full control over color, tick style, and size**  
✅ **Ensures white tick regardless of background**  
❌ **Requires custom styles (instead of `accent-color`)**

---

### **Solution 3: Image-Based Checkbox**
For a **fully custom look**, replace the default checkbox with an **image-based solution**:

```css
input[type="checkbox"] {
    display: none; /* Hide default checkbox */
}

input[type="checkbox"] + label {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url("unchecked.png") no-repeat center;
    background-size: contain;
    cursor: pointer;
}

input[type="checkbox"]:checked + label {
    background: url("checked-white-tick.png") no-repeat center;
    background-size: contain;
}
```

✅ **Perfect if you need a custom-designed checkbox**  
❌ **Requires image assets (`checked.png`, `unchecked.png`)**

---

### **Best Approach?**
| Method | Tick Color Control | Customization Level | Browser Support |
|--------|------------------|----------------|----------------|
| **`accent-color`** | ❌ No | Limited | ✅ All modern browsers |
| **`filter: invert(1);`** | ⚠️ Hacky workaround | Minimal | ✅ Most browsers |
| **Custom CSS (`::before`)** | ✅ Full control | Full | ✅ All browsers |
| **Image-based checkbox** | ✅ Complete control | Full | ✅ All browsers |

**Recommended:**  
- Use **`accent-color`** if you want a quick fix (but accept a black tick).
- Use **custom CSS (`::before`)** if you need **full control over colors**.
- Use **images** if you want **a fully custom checkbox design**.