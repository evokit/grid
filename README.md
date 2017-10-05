# EvoKit - Grid

### Резиновый макет сетки.

Cетка UIKit вмещает до 10 столбцов. Она использует блоки с предварительно определенными классами внутри каждой сетки, которые определяют ширину столбца. Кроме того, можно создавать вложенную разметку.

---

## Использование

Для того, чтобы создать контейнер сетки, добавить класс `.grid`  к родительскому элементу и класс `.grid__item` дочерним элементам.

### HTML
``` html
<link href="evokit/grid.css" rel="stylesheet" type="text/css" />

<div class='grid'>
    <div class='grid__item'>
        ...
    </div>
    <div class='grid__item'>
        ...
    </div>
</div>
```

### JSX
``` jsx
import Grid from 'evokit-grid';

<Grid grid-column={2}>
    <Grid.Item>
        ...
    </Grid.Item>
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
| `.grid_column_expand`                 | Каждый потомок получит одинаковый размер. |

### HTML
``` html
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
``` jsx
<Grid grid-column={2}>
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

|         Class          |         Description         |
|------------------------|-----------------------------|
| `.grid_size_s` | 5px.  |
| `.grid_size_m` | 15px. |
| `.grid_size_l` | 30px. |

### HTML
``` html
<div class='grid grid_column_2 grid_size_xxxl'>
    <div class='grid__item'>
        ...
    </div>
    <div class='grid__item'>
        ...
    </div>
</div>
```

### JSX
``` jsx
<Grid grid-column={2} grid-size='m'>
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

Устанавливает главную ось `main-axis`, определяя тем самым направление для элементов сетки. По умолчанию, слева направо.

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.grid_direction_row`            | Cлева направо для **ltr**, справа налево для **rtl**  |
|  `.grid_direction_row-reverse`    | Cправа налево для **ltr**, слева направо для **rtl**  |
|  `.grid_direction_column`         | Aналогично **row** сверху вниз  |
|  `.grid_direction_column-reverse` | Aналогично **row-reverse**, снизу вверх.  |

### HTML
``` html
<div class='grid grid_column_2 grid_direction_row-reverse'>
    <div class='grid__item'>
        ...
    </div>
    <div class='grid__item'>
        ...
    </div>
</div>
```

### JSX
``` jsx
<Grid grid-column={2} grid-direction='row-reverse'>
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
``` html
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
``` jsx
<Grid grid-wrap='nowrap'>
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
``` html
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
``` jsx
<Grid grid-column={2}>
    <Grid.Item>
        ...
    </Grid.Item>
    <Grid.Item>
        <Grid grid-column={3}>
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
|  `.grid_align_left`    | Выравнивание по левому краю. |
|  `.grid_align_right`   | Выравнивание по правому краю. |
|  `.grid_align_center`  | Выравнивание по центру.       |
|  `.grid_align_justify` | Выравнивание по краям.        |

### HTML
``` html
<div class="grid grid_align_center">
    <div class="grid__item">
        ...
    </div>
</div>
```

### JSX
``` jsx
<Grid grid-align='center'>
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
``` html
<div class='grid ui-grid_column_1 grid_valign_justify'>
    <div class='grid__item'>
        ...
    </div>
    <div class='grid__item'>
        ...
    </div>
</div>
```

### JSX
``` jsx
<Grid grid-column={1} grid-valign='center'>
    <Grid.Item>
        ...
    </Grid.Item>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```

---

## Разделитель между ячейками

Чтобы применить вертикальный разделитель между ячейками, добавьте класс `.ui-grid_theme_divider`.

### HTML
``` html
<div class='grid grid_size_m grid_theme_divider grid_column_3'>
    <div class='grid__item'>
        ...
    </div>
    <div class='grid__item'>
        ...
    </div>
</div>
```

### JSX
``` jsx
<Grid grid-size='m' grid-theme='divider' grid-column={3}>
    <Grid.Item>
        ...
    </Grid.Item>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```
