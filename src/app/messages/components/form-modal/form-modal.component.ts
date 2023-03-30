import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css'],
})
export class FormModalComponent implements OnInit {
  messageForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FormModalComponent>,
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.messageForm = this.fb.group({
      name: ['', Validators.required],
      text: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  onSubmit(): void {
    const newMessage = { ...this.messageForm.value, date: Date.now() };
    this.dialogRef.close(newMessage);
  }
}
