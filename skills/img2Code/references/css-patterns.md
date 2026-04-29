# CSS 样式模式

## 布局模式

### Flexbox 布局
```css
/* 水平排列 */
.flex-row {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

/* 垂直排列 */
.flex-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* 两端对齐 */
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 居中 */
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Grid 布局
```css
.grid-2-col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.grid-3-col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

## 组件样式模式

### 卡片组件
```css
.card {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 24px;
}
```

### 按钮组件
```css
.btn-primary {
  background: #1890ff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}

.btn-secondary {
  background: #ffffff;
  color: #8c8c8c;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}
```

### 标签组件
```css
.tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 2px;
  font-size: 12px;
}

.tag-green {
  background: #52c41a;
  color: #ffffff;
}

.tag-blue {
  background: #1890ff;
  color: #ffffff;
}
```

### 输入框组件
```css
.input {
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
}

.input:focus {
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
  outline: none;
}
```

## 文本样式模式

### 标题层级
```css
.title-h1 {
  font-size: 20px;
  font-weight: 600;
  color: #262626;
}

.title-h2 {
  font-size: 16px;
  font-weight: 600;
  color: #262626;
}

.title-h3 {
  font-size: 14px;
  font-weight: 600;
  color: #262626;
}
```

### 正文和辅助文字
```css
.text-body {
  font-size: 14px;
  color: #262626;
  line-height: 1.6;
}

.text-secondary {
  font-size: 12px;
  color: #8c8c8c;
}
```

## 分隔线模式
```css
.divider {
  height: 1px;
  background: #f0f0f0;
  margin: 16px 0;
}

.divider-vertical {
  width: 1px;
  background: #f0f0f0;
  margin: 0 16px;
}
```

## 间距模式
```css
/* 内边距 */
.p-xs { padding: 4px; }
.p-sm { padding: 8px; }
.p-md { padding: 16px; }
.p-lg { padding: 24px; }
.p-xl { padding: 32px; }

/* 外边距 */
.m-xs { margin: 4px; }
.m-sm { margin: 8px; }
.m-md { margin: 16px; }
.m-lg { margin: 24px; }
.m-xl { margin: 32px; }

/* 间隙 */
.gap-xs { gap: 4px; }
.gap-sm { gap: 8px; }
.gap-md { gap: 16px; }
.gap-lg { gap: 24px; }
```

## 注意事项

1. **避免样式冲突**：使用 BEM 命名规范或 CSS Modules
2. **响应式设计**：使用媒体查询适配不同屏幕
3. **性能优化**：避免过度嵌套选择器
4. **可维护性**：使用 CSS 变量管理主题色
