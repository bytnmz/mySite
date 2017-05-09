'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget);

  // Copy fonts
  gulp.task('copy.fonts', () => {
    return gulp.src([path.join(dirs.source, dirs.icons, '**/*'), path.join(dirs.source, dirs.fonts, '**/*')])
      .pipe(gulp.dest(path.join(dest, '/assets/fonts')));
  });

  // Copy styles
  gulp.task('copy.styles', () => {
    return gulp.src([path.join(dirs.source, dirs.styles, '**/*.css')])
      .pipe(gulp.dest(path.join(dest, '/assets/styles')));
  });

  // Copy api
  gulp.task('copy.api', () => {
    return gulp.src([path.join(dirs.source, dirs.api, '**/*')])
      .pipe(gulp.dest(path.join(dest, '/assets/api')));
  });
  // Copy
  gulp.task('copy', ['copy.fonts', 'copy.styles', 'copy.api'], () => {
    return gulp.src([
      path.join(dirs.source, '**/*'),
      '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}'),
      '!' + path.join(dirs.source, '**/*.jade')
    ])
    .pipe(plugins.changed(dest))
    .pipe(gulp.dest(dest));
  });
}
