<template>
<div class="h-leader-board">
    <table class="table">
        <caption>Leaderboard</caption>
        <thead>
        <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Pts</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Spartans</td>
            <td>42</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Olypus</td>
            <td>40</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Kratos</td>
            <td>36</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Heracles</td>
            <td>34</td>
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
  name: "HomeLeaderBoard"
};
</script>

<style scoped>
.h-leader-board {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    overflow: hidden;
    padding: 20px;
    color: #cacac9;
}
.h-leader-board caption{
    color: #bdbdbd;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
}
.h-leader-board  .table > tbody > tr > td {
    border-top: 1px solid #615c5c;
}

.h-leader-board  .table > thead > tr > th {
    color: #fff;
    border-bottom: 2px solid #6a6a6a;
}

</style>