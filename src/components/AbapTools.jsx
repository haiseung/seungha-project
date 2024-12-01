import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Trash } from 'lucide-react';

const AbapTools = () => {
  const [tableInfo, setTableInfo] = useState({
    typeName: 'TY_TABLE',
    tableName: 'LT_TABLE',
    structName: 'LS_TABLE',
    fields: [
      { name: 'MATNR', type: 'MATNR', text: 'Material', key: 'X' },
      { name: 'MAKTX', type: 'MAKTX', text: 'Description', key: '' }
    ]
  });

  const generateAbapCode = () => {
    const typeDefinition = tableInfo.fields
      .map(field => `        ${field.name.toLowerCase()} TYPE ${field.type}`)
      .join(',\n');

    return `TYPES: BEGIN OF ${tableInfo.typeName.toLowerCase()},\n${typeDefinition}\n      END OF ${tableInfo.typeName.toLowerCase()}.\n\nDATA: ${tableInfo.tableName.toLowerCase()} TYPE TABLE OF ${tableInfo.typeName.toLowerCase()},\n      ${tableInfo.structName.toLowerCase()} TYPE ${tableInfo.typeName.toLowerCase()}.`;
  };

  const generateFieldCatalog = () => {
    const catalogFields = tableInfo.fields
      .map(field => 
        `         ( fieldname = '${field.name}' ref_field = '${field.name}' key = '${field.key}' seltext_m = '${field.text}' )`
      )
      .join('\n');

    return `DATA(lt_fcat) = VALUE slis_t_fieldcat_alv(\n${catalogFields}\n       ).`;
  };

  const addField = () => {
    setTableInfo({
      ...tableInfo,
      fields: [...tableInfo.fields, { name: '', type: '', text: '', key: '' }]
    });
  };

  const removeField = (index) => {
    const newFields = tableInfo.fields.filter((_, i) => i !== index);
    setTableInfo({
      ...tableInfo,
      fields: newFields
    });
  };

  const updateField = (index, field) => {
    const newFields = [...tableInfo.fields];
    newFields[index] = field;
    setTableInfo({
      ...tableInfo,
      fields: newFields
    });
  };

  const updateTableInfo = (key, value) => {
    setTableInfo({
      ...tableInfo,
      [key]: value
    });
  };

  return (
    <Card className="w-full max-w-3xl">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">TYPE 이름</label>
              <input
                className="w-full p-2 border rounded"
                value={tableInfo.typeName}
                onChange={(e) => updateTableInfo('typeName', e.target.value.toUpperCase())}
                placeholder="TY_TABLE"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">테이블 변수명</label>
              <input
                className="w-full p-2 border rounded"
                value={tableInfo.tableName}
                onChange={(e) => updateTableInfo('tableName', e.target.value.toUpperCase())}
                placeholder="LT_TABLE"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">구조체 변수명</label>
              <input
                className="w-full p-2 border rounded"
                value={tableInfo.structName}
                onChange={(e) => updateTableInfo('structName', e.target.value.toUpperCase())}
                placeholder="LS_TABLE"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">필드명</th>
                  <th className="border border-gray-300 px-4 py-2">TYPE</th>
                  <th className="border border-gray-300 px-4 py-2">텍스트</th>
                  <th className="border border-gray-300 px-4 py-2">키필드</th>
                  <th className="border border-gray-300 px-4 py-2">작업</th>
                </tr>
              </thead>
              <tbody>
                {tableInfo.fields.map((field, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        className="w-full p-1 border rounded"
                        value={field.name}
                        onChange={(e) => updateField(index, { ...field, name: e.target.value.toUpperCase() })}
                        placeholder="MATNR"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        className="w-full p-1 border rounded"
                        value={field.type}
                        onChange={(e) => updateField(index, { ...field, type: e.target.value.toUpperCase() })}
                        placeholder="MATNR"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        className="w-full p-1 border rounded"
                        value={field.text}
                        onChange={(e) => updateField(index, { ...field, text: e.target.value })}
                        placeholder="Material"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        className="w-full p-1 border rounded"
                        value={field.key}
                        onChange={(e) => updateField(index, { ...field, key: e.target.value.toUpperCase() })}
                        placeholder="X"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        onClick={() => removeField(index)}
                        className="p-1 text-red-600 hover:bg-red-100 rounded"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={addField}
              className="flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> 필드 추가
            </Button>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">ABAP 코드</h3>
              <pre className="text-sm whitespace-pre-wrap overflow-x-auto">{generateAbapCode()}</pre>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Field Catalog</h3>
              <pre className="text-sm whitespace-pre-wrap overflow-x-auto">{generateFieldCatalog()}</pre>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AbapTools;