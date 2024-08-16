<!-- 注释 -->
<template>
  <div class="card">
    <h1>Frosted Glass Effect</h1>
    <p>This is a card with a frosted glass effect using CSS backdrop-filter.</p>
  </div>
</template>

<script>
/* 注释 */
export default {
  name: "FrostedGlass"
}
</script>

<style>
/* 注释：删掉scoped之后就显示图片和毛玻璃效果了 效果很好 */
/* 你已经在 <style> 标签中使用了 scoped，这意味着样式只会应用于当前组件。如果你尝试修改 body 元素的样式，它可能不会生效，因为 body 不属于组件。你可以去掉 scoped 或者在全局样式文件中定义 body 的样式。 */
body {
  background-image: url('https://cdn.pixabay.com/photo/2019/07/18/18/57/alpine-4347082_1280.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border-radius: 10px;
  padding: 30px;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.card h1 {
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.card p {
  color: #ddd;
}
</style>