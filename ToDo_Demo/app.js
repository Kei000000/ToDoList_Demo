var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
     ev.target.classList.toggle('done');
  }
}, false);

// 何故かわからないけどheader内部にscript書くと２行目でnull返してくる
// bodyの一番下にscript書いたら治る
// もしかしてHTMLは上から順に実行されているから？このときにulとかLIは存在しないしbodyが解釈されていないため