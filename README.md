# EvoKit - Grid

### Резиновый макет сетки.

Cетка вмещает до 10 столбцов. Она использует блоки с предварительно определенными классами внутри каждой сетки, которые определяют ширину столбца. Кроме того, можно создавать вложенную разметку.

---

## Использование

Для того, чтобы создать контейнер сетки, добавьте класс `.grid` к родительскому блоку и класс `.grid__item` дочерним элементам.

### HTML
```html
<link href="@evokit/grid/dist/style.css" rel="stylesheet">

<div class='grid'>
    <div class='grid__item'>
        ...
    </div>
</div>
```

### JSX
```jsx
import Grid from 'evokit-grid';

<Grid>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```

---

## Колонки

|                 Class                 |                 Description               |
|---------------------------------------|-------------------------------------------|
| `.grid_column_1` до `.grid_column_10` | Делит на равные колонки.                  |

### HTML
```html
<div class='grid grid_column_2'>
    <div class='grid__item'>
        ...
    </div>
    <div class='grid__item'>
        ...
    </div>
</div>
```

### JSX
```jsx
<Grid column={2}>
    <Grid.Item>
        ...
    </Grid.Item>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```

---

## Расстояние между ячейками

По умолчанию, сетка не имеет отступов.

|            Class          |         Description         |
|---------------------------|-----------------------------|
| `.grid_size_xxs`  | 5px.  |
| `.grid_size_xs`   | 10px. |
| `.grid_size_s`    | 15px. |
| `.grid_size_m`    | 20px. |
| `.grid_size_l`    | 25px. |
| `.grid_size_xl`   | 30px. |
| `.grid_size_xxl`  | 35px. |
| `.grid_size_xxxl` | 40px. |

### HTML
```html
<div class='grid grid_size_xl'>
    <div class='grid__item'>
        ...
    </div>
    <div class='grid__item'>
        ...
    </div>
</div>
```

### JSX
```jsx
<Grid size='xl'>
    <Grid.Item>
        ...
    </Grid.Item>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```

---

## Направление ячеек

Устанавливает главную ось `main-axis`, определяя тем самым направление для элементов сетки.
По умолчанию, слева направо.

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.grid_direction_row`            | Cлева направо для **ltr**, справа налево для **rtl**  |
|  `.grid_direction_row-reverse`    | Cправа налево для **ltr**, слева направо для **rtl**  |
|  `.grid_direction_column`         | Aналогично **row** сверху вниз  |
|  `.grid_direction_column-reverse` | Aналогично **row-reverse**, снизу вверх.  |

### HTML
```html
<div class='grid grid_direction_row-reverse'>
    <div class='grid__item'>
        ...
    </div>
    <div class='grid__item'>
        ...
    </div>
</div>
```

### JSX
```jsx
<Grid direction='row-reverse'>
    <Grid.Item>
        ...
    </Grid.Item>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```

---

## Перенос ячеек

В одной строке может быть много элементов. Модификатор задает правила переноса.

|            Class            |                       Description                       |
|-----------------------------|---------------------------------------------------------|
|  `.grid_wrap_nowrap`        | Элементы не переносятся                                 |
|  `.grid_wrap_wrap`          | Переносятся                                             |
|  `.grid_wrap_wrap-reverse`  | Переносятся и располагаются в обратном порядке          |

### HTML
```html
<div class='grid grid_wrap_nowrap'>
    <div class='grid__item'>
        ...
    </div>
    <div class='grid__item'>
        ...
    </div>
</div>
```

### JSX
```jsx
<Grid wrap='nowrap'>
    <Grid.Item>
        ...
    </Grid.Item>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```

---

## Вложенные сетки

Можно легко расширить макет сетки с вложенными сетками.

### HTML
```html
<div class='grid grid_column_2'>
    <div class='grid__item'>
        ...
    </div>
    <div class='grid__item'>
        <div class='grid grid_column_3'>
            <div class='grid__item'>
                ...
            </div>
            <div class='grid__item'>
                ...
            </div>
            <div class='grid__item'>
                ...
            </div>
        </div>
    </div>
</div>
```

### JSX
```jsx
<Grid column={2}>
    <Grid.Item>
        ...
    </Grid.Item>
    <Grid.Item>
        <Grid column={3}>
            <Grid.Item>
                ...
            </Grid.Item>
            <Grid.Item>
                ...
            </Grid.Item>
            <Grid.Item>
                ...
            </Grid.Item>
        </Grid>
    </Grid.Item>
</Grid>
```

---

## Горизонтальное выравнивание

По умолчанию, сетка выровнена по левому краю.

|           Class           |          Description          |
|---------------------------|-------------------------------|
|  `.grid_align_left`       | Выравнивание по левому краю.  |
|  `.grid_align_right`      | Выравнивание по правому краю. |
|  `.grid_align_center`     | Выравнивание по центру.       |
|  `.grid_align_justify`    | Выравнивание по краям.        |

### HTML
```html
<div class="grid grid_align_center">
    <div class="grid__item">
        ...
    </div>
</div>
```

### JSX
```jsx
<Grid align='center'>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```

---

## Вертикальное выравние

По умолчанию, сетка выровнена к верху.

|            Class            |        Description      |
|-----------------------------|-------------------------|
|  `.grid_valign_middle`   | Выравнивание по центру. |
|  `.grid_valign_bottom`   | Выравнивание к низу.    |
|  `.grid_valign_justify`  | Выравнивание к краям.   |
|  `.grid_valign_baseline` | Выравнивает базовую линию ячейки с базовой линией первой текстовой строки.   |

### HTML
```html
<div class='grid grid_valign_justify'>
    <div class='grid__item'>
        ...
    </div>
    <div class='grid__item'>
        ...
    </div>
</div>
```

### JSX
```jsx
<Grid valign='justify'>
    <Grid.Item>
        ...
    </Grid.Item>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```

---

## Ширина ячейки

Ширина ячейки определяется для элемента секти `.grid__item`.

|                  Class                 |            Description                               |
|----------------------------------------|------------------------------------------------------|
|  `.grid__item_width-1-1`                               | Заполняет 100% доступной ширины.     |
|  `.grid__item_width-1-2`                               | Деление на две половины, 50%.        |
|  `.grid__item_width-1-3` до `.grid__item_width-2-3`    | Деление на три части.                |
|  `.grid__item_width-1-4` до `.grid__item_width-3-4`    | Деление на четыре части.             |
|  `.grid__item_width-1-5` до `.grid__item_width-4-5`    | Деление на пять частей.              |
|  `.grid__item_width-1-6` до `.grid__item_width-5-6`    | Деление на шесть частей.             |
|  ...                                                   | ...                                  |
|  `.grid__item_width-1-10` до `.grid__item_width-9-10`  | Деление на десять частей.            |

Например класс `.grid__item_width-5-10` будет работать точно так же как `.grid__item_width-1-2`.

### HTML
```html
<div class='grid'>
    <div class='grid__item grid__item_width-1-3'>
        ...
    </div>
</div>
```

### JSX
```jsx
<Grid>
    <Grid.Item width='1-3'>
        ...
    </Grid.Item>
</Grid>
```

---

## Порядок ячеек

Задает порядок следования элемента сетки `.grid__item`.

|                  Class                 |       Description          |
|----------------------------------------|----------------------------|
|  `.grid__item_order-1` до `.grid__item_order-10`  | Целое число.    |

По умолчанию все элементы будут следовать друг за другом в порядке, заданном в html.

### HTML
```html
<div class='grid'>
    <div class='grid__item grid__item_order-2'>
        ...
    </div>
    <div class='grid__item grid__item_order-1'>
        ...
    </div>
</div>
```

### JSX
```jsx
<Grid>
    <Grid.Item order={2}>
        ...
    </Grid.Item>
    <Grid.Item order={1}>
        ...
    </Grid.Item>
</Grid>
```
