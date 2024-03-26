import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MarkdownModule, MarkdownService, provideMarkdown } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MarkdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [provideMarkdown()],
})
export class AppComponent {}
